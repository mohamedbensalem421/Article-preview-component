let share = document.querySelector("button")
let social = document.querySelector(".social")
let content = document.querySelector(".content")

share.onclick = function (){
	share.classList.replace("bg-[#EFF2F8]","bg-[#4B556A]") || share.classList.replace("bg-[#4B556A]", "bg-[#EFF2F8]")
	share.firstElementChild.classList.replace("text-[#4B556A]","text-[#EFF2F8]") || share.firstElementChild.classList.replace("text-[#EFF2F8]", "text-[#4B556A]")
	content.classList.toggle("max-md:pb-[12px]")
	social.classList.toggle("opacity-0")
	share.classList.toggle("max-md:bg-[#7f8ba4]")
}