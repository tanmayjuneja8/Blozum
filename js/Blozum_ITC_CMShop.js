		function initializeChatbot(apiKey) {
			var uuid = localStorage.getItem("uuid");
			var ticket_created = "False";
			if (!uuid) {
				uuid = uuidv4();
				localStorage.setItem("uuid", uuid);
			}
			if (!document.querySelector(".container")) {
				var container = document.createElement("div");
				container.className = "container";

				var chatbox = document.createElement("div");
				chatbox.className = "chatbox";

				var supportDiv = document.createElement("div");
				supportDiv.className = "chatbox__support";

				var headerDiv = document.createElement("div");
				headerDiv.className = "chatbox__header";

				var imageDiv = document.createElement("div");
				imageDiv.className = "chatbox__image--header";
				var svgElement = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"svg"
				);
				svgElement.setAttribute("version", "1.0");
				svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				svgElement.setAttribute("width", "50px");
				svgElement.setAttribute("height", "50px");
				svgElement.setAttribute("viewBox", "0 0 584 584");
				svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
				svgElement.classList.add("rounded-svg");
				var gElement = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"g"
				);
				gElement.setAttribute(
					"transform",
					"translate(0.000000,584.000000) scale(0.100000,-0.100000)"
				);
				gElement.setAttribute("fill", "#000");
				gElement.setAttribute("stroke", "#000");
				var path1Element = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"path"
				);
				path1Element.setAttribute(
					"d",
					"M0 2920 l0 -2920 2920 0 2920 0 0 2920 0 2920 -2920 0 -2920 0 0 -2920z m1000 678 l0 -743 32 53 c63 108 189 223 318 287 174 88 375 116 564 80 315 -60 584 -314 667 -630 29 -113 29 -297 1 -417 -70 -289 -319 -545 -607 -624 -81 -21 -297 -30 -377 -15 -219 43 -430 175 -544 342 l-49 71 -5 -193 -5 -193 -55 -1 -55 0 -3 1363 -2 1362 60 0 60 0 0 -742z m2070 -360 c0 -1202 -1 -1165 57 -1285 32 -64 137 -174 196 -204 69 -36 148 -59 199 -59 l48 0 0 -45 c0 -25 -1 -48 -2 -52 -4 -11 -94 -4 -161 13 -105 25 -185 72 -273 159 -57 57 -90 99 -113 145 -69 143 -65 56 -68 1303 l-4 1127 61 0 60 0 0 -1102z m1800 7 c0 -3 -87 -148 -194 -322 -596 -979 -726 -1194 -726 -1198 0 -3 207 -5 461 -5 l460 0 -3 -52 -3 -53 -557 -2 c-378 -1 -558 1 -558 8 0 9 58 106 420 704 54 88 188 310 298 493 l202 332 -415 0 -415 0 0 50 0 50 515 0 c283 0 515 -2 515 -5z"
				);
				var path2Element = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"path"
				);
				path2Element.setAttribute(
					"d",
					"M1597 3175 c-94 -18 -220 -77 -299 -139 -132 -105 -243 -271 -284 -426 -24 -88 -24 -272 0 -360 55 -209 217 -404 414 -500 178 -87 415 -94 595 -18 168 70 330 228 402 393 45 101 59 172 59 305 0 187 -40 312 -145 453 -100 133 -266 248 -407 283 -89 22 -245 26 -335 9z"
				);
				gElement.appendChild(path1Element);
				gElement.appendChild(path2Element);
				svgElement.appendChild(gElement);
				imageDiv.appendChild(svgElement);

				var contentDiv = document.createElement("div");
				contentDiv.className = "chatbox__content--header";

				var heading = document.createElement("h4");
				heading.className = "chatbox__heading--header";
				heading.textContent = "Blozum";

				var description = document.createElement("p");
				description.className = "chatbox__description--header";
				description.textContent = "Classmate Notebooks Customer Support";

				contentDiv.appendChild(heading);
				contentDiv.appendChild(description);

				headerDiv.appendChild(imageDiv);
				headerDiv.appendChild(contentDiv);

				var messagesDiv = document.createElement("div");
				messagesDiv.className = "chatbox__messages";
				var innerDiv = document.createElement("div");
				messagesDiv.appendChild(innerDiv);

				var footerDiv = document.createElement("div");
				footerDiv.className = "chatbox__footer";

				var input = document.createElement("input");
				input.type = "text";
				input.id = "BLZ_input";
				input.placeholder = "Ask me anything about Classmate...";
				input.style.backgroundColor = "#fff";
				input.style.margin = 0;
				input.maxLength = 250;


				const blozum = document.createElement("div");
				blozum.className = "blozum";
				blozum.innerHTML =
					"Powered by <strong><a class='link' href='https://blozum.com/'>Blozum</a></strong>";

				var sendButton = document.createElement("button");
				sendButton.className = "chatbox__send--footer send__button_BLZ";

				var sendIconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				sendIconSVG.setAttribute("viewBox", "-4.8 -4.8 33.60 33.60");
				sendIconSVG.setAttribute("width", "40px");
				sendIconSVG.setAttribute("height", "40px");
				sendIconSVG.setAttribute("fill", "none");
				sendIconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				sendIconSVG.setAttribute("stroke", "#");
				sendIconSVG.setAttribute("stroke-width", "0.00024000000000000003");

				var sendPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
				sendPath.setAttribute("fill-rule", "evenodd");
				sendPath.setAttribute("clip-rule", "evenodd");
				sendPath.setAttribute("d", "M1.265 4.42619C1.04293 2.87167 2.6169 1.67931 4.05323 2.31397L21.8341 10.1706C23.423 10.8727 23.423 13.1273 21.8341 13.8294L4.05323 21.686C2.6169 22.3207 1.04293 21.1283 1.265 19.5738L1.99102 14.4917C2.06002 14.0087 2.41458 13.6156 2.88791 13.4972L8.87688 12L2.88791 10.5028C2.41458 10.3844 2.06002 9.99129 1.99102 9.50829L1.265 4.42619ZM21.0257 12L3.2449 4.14335L3.89484 8.69294L12.8545 10.9328C13.9654 11.2106 13.9654 12.7894 12.8545 13.0672L3.89484 15.3071L3.2449 19.8566L21.0257 12Z");
				sendPath.setAttribute("fill", "#fff");

				sendIconSVG.appendChild(sendPath);
				sendButton.appendChild(sendIconSVG);


				// footerDiv.appendChild(homeButton);
				footerDiv.appendChild(input);
				footerDiv.appendChild(sendButton);
				footerDiv.appendChild(blozum);

				supportDiv.appendChild(headerDiv);
				supportDiv.appendChild(messagesDiv);
				supportDiv.appendChild(footerDiv);
				supportDiv.appendChild(blozum);

				var buttonDiv = document.createElement("div");
				buttonDiv.className = "chatbox__button";
				var button = document.createElement("button");
				button.className = "button-35";
				button.id = "chat_button";

				var svgElement = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"svg"
				);
				svgElement.setAttribute("version", "1.0");
				svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				svgElement.setAttribute("width", "50px");
				svgElement.setAttribute("height", "50px");
				svgElement.setAttribute("viewBox", "0 0 584 584");
				svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
				svgElement.classList.add("rounded-svg");
				var gElement = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"g"
				);
				gElement.setAttribute(
					"transform",
					"translate(0.000000,584.000000) scale(0.100000,-0.100000)"
				);
				gElement.setAttribute("fill", "#3cb043");
				gElement.setAttribute("stroke", "#000");
				var path1Element = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"path"
				);
				path1Element.setAttribute(
					"d",
					"M0 2920 l0 -2920 2920 0 2920 0 0 2920 0 2920 -2920 0 -2920 0 0 -2920z m1000 678 l0 -743 32 53 c63 108 189 223 318 287 174 88 375 116 564 80 315 -60 584 -314 667 -630 29 -113 29 -297 1 -417 -70 -289 -319 -545 -607 -624 -81 -21 -297 -30 -377 -15 -219 43 -430 175 -544 342 l-49 71 -5 -193 -5 -193 -55 -1 -55 0 -3 1363 -2 1362 60 0 60 0 0 -742z m2070 -360 c0 -1202 -1 -1165 57 -1285 32 -64 137 -174 196 -204 69 -36 148 -59 199 -59 l48 0 0 -45 c0 -25 -1 -48 -2 -52 -4 -11 -94 -4 -161 13 -105 25 -185 72 -273 159 -57 57 -90 99 -113 145 -69 143 -65 56 -68 1303 l-4 1127 61 0 60 0 0 -1102z m1800 7 c0 -3 -87 -148 -194 -322 -596 -979 -726 -1194 -726 -1198 0 -3 207 -5 461 -5 l460 0 -3 -52 -3 -53 -557 -2 c-378 -1 -558 1 -558 8 0 9 58 106 420 704 54 88 188 310 298 493 l202 332 -415 0 -415 0 0 50 0 50 515 0 c283 0 515 -2 515 -5z"
				);
				var path2Element = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"path"
				);
				path2Element.setAttribute(
					"d",
					"M1597 3175 c-94 -18 -220 -77 -299 -139 -132 -105 -243 -271 -284 -426 -24 -88 -24 -272 0 -360 55 -209 217 -404 414 -500 178 -87 415 -94 595 -18 168 70 330 228 402 393 45 101 59 172 59 305 0 187 -40 312 -145 453 -100 133 -266 248 -407 283 -89 22 -245 26 -335 9z"
				);
				gElement.appendChild(path1Element);
				gElement.appendChild(path2Element);
				svgElement.appendChild(gElement);
				button.appendChild(svgElement);
				buttonDiv.appendChild(button);
				chatbox.appendChild(supportDiv);
				chatbox.appendChild(buttonDiv);

				container.appendChild(chatbox);

				// Append the container to the document body
				document.body.appendChild(container);
			}
			var openButton = document.querySelector(".chatbox__button");
			var chatBox = document.querySelector(".chatbox__support");
			var sendButton = document.querySelector(".send__button_BLZ");
			var chat_button = document.getElementById("chat_button");
			homeButtonBLZ(); // showing the menu programmatically
			var chat_history_blz = [];
			var messages = [];
			var selectedOption = `none`;

			openButton.addEventListener("click", () => toggleState(chatBox));

			document.querySelector(".send__button_BLZ").addEventListener("click", () => onSendButton(chatBox));

			var node = chatBox.querySelector("input");
			node.addEventListener("keyup", ({ key }) => {
				if (key === "Enter") {
					document.querySelector(".send__button_BLZ").click();
				}
			});

			var state = false;
			document.querySelectorAll('.link').forEach(link => {
				link.innerHTML = '<div><span>' + link.textContent.trim().split('').join('</span><span>') + '</span></div>'
				link.querySelectorAll('span').forEach(s => s.innerHTML = s.textContent == ' ' ? '&nbsp;' : s.textContent)
				link.insertAdjacentHTML('beforeend', '<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>')
			});


			function toggleState(chatbox) {
				state = !state;

				if (state) {
					chatbox.classList.add("chatbox--active");
					chat_button.style.backgroundColor = "black";
				} else {
					chatbox.classList.remove("chatbox--active");
					chat_button.style.backgroundColor = "white";
				}
			}
			function scrollChatToBottom() {
				// Get the chat messages container
				var chatMessages = chatBox.querySelector(".chatbox__messages");

				// Scroll to the bottom
				chatMessages.scrollTop = chatMessages.scrollHeight;
			}

			function homeButtonBLZ() {
				var chatmessage = chatBox.querySelector(".chatbox__messages");
				if (!chatmessage.firstChild.classList.contains("visitor_menu_BLZ")) {
					html = `<div class="visitor_menu_BLZ">
	    <div class="flex-container">
	        <button class="button-3" id="order_details" onclick="selectOption('order_details')">Order Details</button>
	        <button class="button-3" id="refund_status" onclick="selectOption('refund_status')">Refund Status</button>
	    </div>
	    <div style="height: 5px;"></div>
	    <div class="flex-container">
	        <button class="button-3" id="get_invoice" onclick="selectOption('get_invoice')">Get Invoice</button>
	        <button class="button-3" id="track_order" onclick="selectOption('track_order')">Track Order</button>
	    </div>
	    <div style="height: 5px;"></div>
	    <div class="flex-container">
	        <button class="button-3" id="yes_open_support_ticket_blz12345" onclick="selectOption('open_support_ticket')">Create Support Ticket</button>
	    </div>
	</div>`;
					chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;
				}
				scrollChatToBottom();
			}

			function fetchChatMessage(request_options) {
				try {
					fetch(
						"https://aiwvg3t87i.execute-api.ap-south-1.amazonaws.com/default/Blozum_ITC_backend",
						request_options
					)
						.then(function (response) {
							return response.text();
						})
						.then(function (response) {
							var jsonData = JSON.parse(response);
							if (typeof jsonData === "object") {
								var html = `<div class="messages__item messages__item--visitor"><span class="message-content">`
								for (var key in jsonData) {
									if (jsonData.hasOwnProperty(key)) {
										if (key === 'messages') {
											html = html + jsonData[key];
										}
										else if (key !== 'messages') {
											if (key === "Ticket URL") {
												ticket_created = "True";
											}
											html += `<br><strong>${key}</strong>: <a href="${jsonData[key]}" target="_blank">${jsonData[key]}</a><br>`;
										}
									}
									else {
										html = html + jsonData[key];
									}
								}
								html += `</span>
	             <div class="message-reaction">
	               <button class="thumb-up" onclick="handleReaction('True')">👍</button>
	               <button class="thumb-down" onclick="handleReaction('False')">👎</button>
	             </div></div>`;
								chatmessage = chatbox.querySelector(".chatbox__messages");
								const dotss = document.getElementById("animation_dots");
								dotss.remove();
								chatmessage.innerHTML = html + chatmessage.innerHTML;
								homeButtonBLZ();  // Clicking the home_button_BLZ_1 button programmatically
							}
						});
				}
				catch (e) {
					console.log(e);
				}
				scrollChatToBottom();
			}
			async function onSendButton(chatbox) {
				scrollChatToBottom();
				var textField = document.getElementById("BLZ_input");
				var text1 = textField.value;
				if (text1 === "") {
					return scrollChatToBottom();
				}
				var html =
					'<div class="messages__item messages__item--operator">' +
					text1 +
					"</div>";
				// update chat_history_blz here. 
				chat_history_blz.push({ "role": "user", "content": text1 });
				var chatmessage = chatbox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = html + chatmessage.innerHTML;
				chatmessage.innerHTML = '<div class="messages__item messages__item--visitor" id="animation_dots"><div class="typing-animation"><span class="blz_s"></span><span class="blz_s"></span><span class="blz_s"></span></div></div>' + chatmessage.innerHTML;
				const dotss = document.getElementById("animation_dots");
				textField.value = "";
				console.log("chat_history_blz");
				console.log(chat_history_blz[0]);

				try {
					fetch(
						"https://aiwvg3t87i.execute-api.ap-south-1.amazonaws.com/default/Blozum_ITC_backend",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								"x-api-key": apiKey,
							},
							body: JSON.stringify({
								message: chat_history_blz,
								user: uuid,
							}),
						}
					)
						.then(function (response) {
							return response.text();
						})
						.then(function (botMessage) {
							chatmessage = chatbox.querySelector(".chatbox__messages");
							try {
								var jsonData = JSON.parse(botMessage);
								dotss.remove();
								if (typeof jsonData === "object") {
									var html = `<div class="messages__item messages__item--visitor"><span class="message-content">`
									for (var key in jsonData) {
										if (jsonData.hasOwnProperty(key)) {
											if (key === 'messages') {
												// update chat_history here.
												chat_history_blz.push({ "role": "user", "content": jsonData[key] });
												console.log("chat history: " + chat_history_blz)
												html = html + jsonData[key];
											}
											if (key !== 'messages') {
												html += `<strong>${key}</strong>: ${jsonData[key]}<br>`;
											}
										}
										else {
											html = html + jsonData[key];
										}
									}
									html += `</span>
	             <div class="message-reaction">
	               <button class="thumb-up" onclick="handleReaction('True')">👍</button>
	               <button class="thumb-down" onclick="handleReaction('False')">👎</button>
	             </div></div>`;
									chatmessage = chatbox.querySelector(".chatbox__messages");
									chatmessage.innerHTML = html + chatmessage.innerHTML;
									homeButtonBLZ();  // Clicking the home_button_BLZ_1 button programmatically
									textField.value = "";
								}
							}
							catch (error) {
								// Regular bot message
								html = "";
								dotss.remove();
								chatmessage = chatbox.querySelector(".chatbox__messages");
								chatmessage.innerHTML = html + chatmessage.innerHTML;
								homeButtonBLZ();  // Clicking the home_button_BLZ_1 button programmatically
								textField.value = "";
							}
						});
				}
				catch (e) {
					console.error(e);
				}
				scrollChatToBottom();
			}
						function handleReaction(isPositive) {
				if (isPositive === "True") {
					try {
						fetch(
							"https://aiwvg3t87i.execute-api.ap-south-1.amazonaws.com/default/Blozum_ITC_backend",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"x-api-key": apiKey,
								},
								body: JSON.stringify({
									message: "👍",
									user: uuid,
								}),
							}
						)
							.then(function (response) {
								return response.text();
							})
							.then(function (botMessage) { console.log(botMessage); })
					} catch (error) {
						console.log(error);
					}
				} else {
					try {
						fetch(
							"https://aiwvg3t87i.execute-api.ap-south-1.amazonaws.com/default/Blozum_ITC_backend",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"x-api-key": apiKey,
								},
								body: JSON.stringify({
									message: "👎",
									user: uuid,
								}),
							}
						)
							.then(function (response) {
								return response.text();
							})
							.then(function (botMessage) { console.log(botMessage); })
					} catch (error) {
						console.log(error);
					}
				}
			}

			function submitOrder() {
				const orderIDInput = document.getElementById("order_number");
				const orderID = orderIDInput.value.trim();

				if (orderID === "") {
					scrollChatToBottom();
					return;
				}

				const requestString = `${selectedOption}_${orderID}`;

				var requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-api-key": apiKey,
					},
					body: JSON.stringify({
						message: requestString,
						user: uuid,
					}),
				};

				// Send the request to the backend
				fetchChatMessage(requestOptions);
				chatmessage = chatBox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = '<div class="messages__item messages__item--visitor" id="animation_dots"><div class="typing-animation"><span class="blz_s"></span><span class="blz_s"></span><span class="blz_s"></span></div></div>' + chatmessage.innerHTML;
				scrollChatToBottom();
				// Clear the input field
				orderIDInput.value = "";
				return;
			}
			function updateChatText(chatbox) {
				var html = "";
				messages
					.slice()
					.reverse()
					.forEach(function (item, index) {
						if (item.name === "Blozum") {
							html +=
								'<div class="messages__item messages__item--visitor"><span class="message-content">' +
								item.message +
								`</span>
	             <div class="message-reaction">
	               <button class="thumb-up" onclick="handleReaction('True')">👍</button>
	               <button class="thumb-down" onclick="handleReaction('False')">👎</button>
	             </div></div>`;
						} else if (item.name === "User") {
							html +=
								'<div class="messages__item messages__item--operator">' +
								item.message +
								"</div>";
						}
					});
				var chatmessage = chatbox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = html + chatmessage.innerHTML;
				return;
			}

			function BLZ_supp_ticket(event) {
				event.preventDefault();
				let subject = document.getElementById('blz_ticket_subject').value;
				let description = document.getElementById('blz_ticket_description').value;
				let email = document.getElementById('blz_ticket_email').value;
				let mobile_number = document.getElementById('blz_ticket_mobile_number').value;
				let first_name = document.getElementById('blz_ticket_first_name').value;
				let last_name = document.getElementById('blz_ticket_last_name').value;

				let payload = {
					message: "yes_open_support_ticket_blozumdabest01834082340293",
					user: uuid,
					data: {
						subject: subject,
						description: description,
						email: email,
						mobile_number: mobile_number,
						first_name: first_name,
						last_name: last_name,
					}
				};

				var requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-api-key": apiKey,
					},
					body: JSON.stringify(payload),
				};
				chatmessage = chatBox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = '<div class="messages__item messages__item--visitor" id="animation_dots"><div class="typing-animation"><span class="blz_s"></span><span class="blz_s"></span><span class="blz_s"></span></div></div>' + chatmessage.innerHTML;
				fetchChatMessage(requestOptions);
			}

			function retrieveOrderID(user_msg) {
				chatBox = document.querySelector(".chatbox__support");
				var chatmessage = chatbox.querySelector(".chatbox__messages");
				var html = '<div class="messages__item messages__item--operator">' + user_msg + '</div>';
				chatmessage = chatbox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = html + chatmessage.innerHTML;
				scrollChatToBottom();
				html = `<div class="messages__item messages__item--visitor"><form style="position: relative;"><input type="text" required id="order_number" maxlength="20" style="width:100%;" placeholder="Enter Order ID" alt="Please enter OrderID"></form><button class='button-3' onClick='submitOrder()' style='background: -webkit-linear-gradient(left, #F58698, #ffc3a0);'>Submit</button></div>`;
				chatmessage = chatbox.querySelector(".chatbox__messages");
				chatmessage.innerHTML = html + chatmessage.innerHTML;
				scrollChatToBottom();
			}
			async function selectOption(option) {
				var textField1 = chatBox.querySelector("input");
				chatBox = document.querySelector(".chatbox__support");
				var Option1 = "Yes123";
				var html = "";
				var chatmessage = chatbox.querySelector(".chatbox__messages");
				if (option === "order_details") {
					selectedOption = `order_details`;
					const orderID = retrieveOrderID("Order Details");
				}
				else if (option === "refund_status") {
					selectedOption = `refund_status`;
					const orderID = retrieveOrderID("Refund Status");
				}
				else if (option === "get_invoice") {
					selectedOption = `get_invoice`;
					const orderID = retrieveOrderID("Get Invoice");
				}
				else if (option === "track_order") {
					selectedOption = `track_order`;
					const orderID = retrieveOrderID("Track Order");
				}
				else if (option === "get_designs") {
					selectedOption = `get_designs`;
					const orderID = retrieveOrderID("Get Designs");
				}
				else if (option === "open_support_ticket") {
					html = '<div class="messages__item messages__item--operator">Create Support Ticket</div>';
					chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;
					html = `
							<div class="messages__item messages__item--visitor" style="width: 100%">
								<form onsubmit="return BLZ_supp_ticket(event);">
									<input type="text" required id="blz_ticket_first_name" style="width:100%;" placeholder="First name *" alt="First Name">
									<input type="text" required id="blz_ticket_last_name" style="width:100%;" placeholder="Last Name *" alt="Last Name">
									<input type="email" required id="blz_ticket_email" style="width:100%;" placeholder="Enter Email *">
									<input type="text" required id="blz_ticket_mobile_number" style="width:100%;" placeholder="Enter mobile number *" alt="Mobile Number">
									<input type="text" required placeholder="Subject *" id="blz_ticket_subject" style="width:100%;">
									<input type="text" required id="blz_ticket_description" placeholder="Enter Description *" style="width:100%;">
									<button class='button-3' onClick="BLZ_supp_ticket(event);" style='background: -webkit-linear-gradient(left, #F58698, #ffc3a0);'>Submit</button>
								</form>
							</div>
						`;
					chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;

				}
				else if (option === "dont_open_support_ticket") {
					Option1 = "no_donot_open_support_ticket_blozumdabest82340978294587";
					html =
						'<div class="messages__item messages__item--operator">No</div>';
					chatmessage = chatbox.querySelector(".chatbox__messages");
					chatmessage.innerHTML = html + chatmessage.innerHTML;
					var requestOptions = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-api-key": apiKey,
						},
						body: JSON.stringify({
							message: Option1,
							user: uuid,
						}),
					};
					fetchChatMessage(requestOptions);
				}
			}
			window.selectOption = selectOption;
			window.submitOrder = submitOrder;
			window.homeButtonBLZ = homeButtonBLZ;
			window.BLZ_supp_ticket = BLZ_supp_ticket;
			window.sendButton = sendButton;
			window.handleReaction = handleReaction;
		}