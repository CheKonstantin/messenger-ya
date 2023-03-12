export const chat = `
<main>
<a href="/" class="button-back">HOME PAGE</a>
<section class='chat'>
  <div class='chat__leftbar'>
    <div class='chat__leftbar-header'>
      <div class='chat__leftbar-header-top'>
        <a href="/profile" class='chat__leftbar-avatar'>
          <i></i>
        </a>
        <div class='chat__leftbar-header-btns'>
          <a href='' class='chat__leftbar-header-btn chat__leftbar-header-btn--group'>
             <i></i>
          </a>
         <a href='' class='chat__leftbar-header-btn chat__leftbar-header-btn--del'>
             <i></i>
          </a>
         <a href='' class='chat__leftbar-header-btn chat__leftbar-header-btn--insert'>
             <i></i>
          </a>
           <a href='' class='chat__leftbar-header-btn chat__leftbar-header-btn--menu'>
             <i></i>
          </a>
        </div>
      </div>
      <input
        type='search'
        name=''
        class='chat__leftbar-header-search'
        placeholder='Найти'
        id=''
      />
    </div>
    <div class='chat__leftbar-body'>
      <a href="/chat-open" class='chat__leftbar-mesitem'>
        <div class='chat__leftbar-mesitem-left'>
          <div class='chat__leftbar-mesitem-avatar'>
            <i></i>
          </div>
          <div class='chat__leftbar-mesitem-descr'>
            <div class='chat__leftbar-mesitem-name'>Иван</div>
            <div class='chat__leftbar-mesitem-msg'>Привет. Как дела?</div>
          </div>
        </div>

        <div class='chat__leftbar-mesitem-time'>Вчера</div>

      </a>
    </div>
  </div>
  <div class='chat__dialog chat__dialog--empty'>
    <div class='chat__dialog-text-open'>С вами хотят общатся.
      <br />
      Напишите кому-нибудь</div>
  </div>
</section>
</main>

`