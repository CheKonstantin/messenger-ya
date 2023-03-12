import Handlebars from "handlebars";

export const Main = () => {
  return Handlebars.compile(`
    <nav class="main-nav">
      <a href="/page-404" class="main-link">page-404</a>
      <a href="/page-500" class="main-link">page-500</a>
      <a href="/auth" class="main-link">Autorization</a>
      <a href="/reg" class="main-link">Registration</a>
      <a href="/profile" class="main-link">Profile</a>
      <a href="/chat" class="main-link">Chat</a>
      <a href="/chat-open" class="main-link">ChatOpen</a>
      <a href="/chat-open-profile" class="main-link">ChatOpenProfile</a>
    </nav>
  `)();
}