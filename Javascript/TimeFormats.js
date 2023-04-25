// These are some of the formats you can use on time.
var now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
// 01:15 AM

var now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
// 14:49

var now = new Date()
var now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// 01:15:37

var now = new Date().toLocaleString();
// 8/12/2021, 01:15:37 AM

new Date().toLocaleTimeString();
// 01:15:37 AM

new Date().toLocaleDateString();
// 8/12/2021