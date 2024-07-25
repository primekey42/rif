import * as page from "./fetcher.js?v='e4'";
import "./axios/axios.js?v=23";
import * as Router from "./router.js?y4se3h";
import * as $ from "./jquery.min.js";


//events
import * as EVENT from "./../modules/events.js?_s&453";

//components
import  "./../modules/latestProduct.js?yet5%34";
import  "./../modules/listProduct.js?yetui5%34";
import  "./../modules/viewProduct.js?yee4r3ts5r";
import  "./../modules/cart.js?yetx345ts5%34";
import  "./../modules/checkout.js?yedtss5r%34";
import  "./../modules/address.js?yets5se43re";
import  "./../modules/track.js?_565$%";
import  "./../modules/orders.js?yets65%34";



const appContainer = document.querySelector('main') ?? document.querySelector("#main");
var routes = new Router.Router("/",appContainer,1,0,0);

routes.on("/",()=>{
	routes.load("/")
	.then(data=>{
		routes.listen("click");
		EVENT.click(routes);
	})
})

routes.on("/help",()=>{
	routes.load(routes.current)
	.then(data=>{
		routes.listen("click");
		EVENT.click(routes);
	})
})

routes.on("/page",()=>{
	routes.load(routes.current)
	.then(data=>{
		appContainer.scrollIntoView({behavior: "smooth",block: "start",inline: "nearest"});
		routes.listen("click");
		EVENT.click(routes);
	})
})

routes.on("/view",()=>{
	routes.load(routes.current)
	.then(data=>{
		appContainer.scrollIntoView({behavior: "smooth",block: "start",inline: "nearest"});
		routes.listen("click");
		EVENT.click(routes);
		//console.log("ddd")
	})
})

routes.on("/cart",()=>{
	routes.load(routes.current)
	.then(data=>{
		window.scrollTo({ top: 0 })
		routes.listen("click");
		EVENT.click(routes);
		//console.log("ddd")
	})
})

routes.on("/login",()=>{
	routes.load(routes.current)
	.then(data=>{
		window.scrollTo({ top: 0 })
		routes.listen("click");
		EVENT.click(routes);
		routes.listen("submit");
		EVENT.click(routes);
		EVENT.submit(routes);
	})
})

routes.on("/signup",()=>{
	routes.load(routes.current)
	.then(data=>{
		routes.listen("click");
		routes.listen("submit");
		EVENT.click(routes);
		EVENT.submit(routes);
		//console.log("ddd")
	})
})

routes.on("/reset",()=>{
	routes.load(routes.current)
	.then(data=>{
		routes.listen("click");
		routes.listen("submit");
		EVENT.click(routes);
		EVENT.submit(routes);
		//console.log("ddd")
	})
})



//ACOUNT SECTION 
routes.on("/account",()=>{
	axios.post("/Access/isLogged",{}).then(res=>{
		if(res.data.status)
		{
			routes.load(routes.current)
			.then(data=>{

				routes.listen("click");
				EVENT.click(routes);
		
			})
		}
		else
		{
			routes.navigateTo("/login");
		}
	})
	
	
})
routes.on("/account/profile",()=>{
	axios.post("/Access/isLogged",{}).then(res=>{
		if(res.data.status)
		{
			routes.load(routes.current)
			.then(data=>{

				routes.listen("click");
				routes.listen("submit");
				routes.listen("input");
				EVENT.click(routes);
				EVENT.submit(routes);
				EVENT.onTyping(routes);
				console.log("ddd")
		
			})
		}
		else
		{
			routes.navigateTo("/login");
		}
	})
	
	
})


routes.on("/account/address",()=>{
	axios.post("/Access/isLogged",{}).then(res=>{
		if(res.data.status)
		{
			routes.load(routes.current)
			.then(data=>{

				routes.listen("click");
				EVENT.click(routes);
		
			})
		}
		else
		{
			routes.navigateTo("/login");
		}
	})
	
	
})

routes.on("/account/track",()=>{
	axios.post("/Access/isLogged",{}).then(res=>{
		if(res.data.status)
		{
			routes.load(routes.current)
			.then(data=>{

				routes.listen("click");
				EVENT.click(routes);
		
			})
		}
		else
		{
			routes.navigateTo("/login");
		}
	})
	
	
})


var currenturl = "/" + window.location.href.split("/")?.slice(3).join("/") ?? "/";
routes.resolve(currenturl);