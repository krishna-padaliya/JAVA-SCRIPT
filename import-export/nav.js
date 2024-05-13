function loadNavBar(){
    const navbar = ` <nav>
    <a href="">HOME</a>
    <a href="">ABOUT</a>
    <a href="">PAGES</a>
    <a href="">BLOG</a>
    <a href="">CONTACT</a>
</nav>`
document.getElementById("navbar").innerHTML=navbar;
}
export {loadNavBar}