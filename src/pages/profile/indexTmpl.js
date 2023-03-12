

export const profile = `
<main>
      <section class='main'>
        <a href="/" class="button-back">HOME PAGE</a>
        <div class='modal-dialog'>
          <div class='modal-dialog__title'>Профиль</div>
          <form action='' class='modal-dialog__wrapper'>

          <div class="modal-dialog__edit-img">
              <i></i>
          </div>
                <input
              type='text'
              name='prof_mail'
              class='modal-dialog__input'
              placeholder='Ваша почта'
            />
            <input
              type='text'
              name='prof_log'
              class='modal-dialog__input'
              placeholder='Ваш логин'
            />
            <input
              type='text'
              name='prof_name'
              class='modal-dialog__input'
              placeholder='Имя'
            />
            <input
              type='text'
              name='prof_last_name'
              class='modal-dialog__input'
              placeholder='Фамилие'
            />
            <input
              type='text'
              name='prof_tel'
              class='modal-dialog__input'
              placeholder='Ваш телефон'
            />
            <input
              type='text'
              name='prof_pass'
              class='modal-dialog__input'
              placeholder='Ваш пароль'
            />
            <input
              type='submit'
              name='reg_pass_rep'
              class='modal-dialog__submit'
              value='Сохранить'
            />

            <a href='/auth' class='modal-dialog__link'>Редактировать профиль</a>

          </form>
        </div>

      </section>
    </main>

`