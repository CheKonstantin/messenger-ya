

export const reg = `

<main>
      <section class='main'>
        <a href="/" class="button-back">HOME PAGE</a>
        <div class='modal-dialog'>
          <div class='modal-dialog__title'>Регистрация</div>
          <form action='' class='modal-dialog__wrapper'>
                <input
              type='text'
              name='reg_name'
              class='modal-dialog__input'
              placeholder='Ваша почта'
            />
            <input
              type='text'
              name='reg_log'
              class='modal-dialog__input'
              placeholder='Ваш логин'
            />
            <input
              type='text'
              name='reg_name'
              class='modal-dialog__input'
              placeholder='Имя'
            />
            <input
              type='text'
              name='reg_last_name'
              class='modal-dialog__input'
              placeholder='Фамилие'
            />
            <input
              type='text'
              name='reg_tel'
              class='modal-dialog__input'
              placeholder='Ваш телефон'
            />
            <input
              type='text'
              name='reg_pass'
              class='modal-dialog__input'
              placeholder='Ваш пароль'
            />
            <input
              type='text'
              name='reg_pass_rep'
              class='modal-dialog__input'
              placeholder='Введите пароль еще раз'
            />

            <input
              type='submit'
              value='Зарегистрироваться'
              class='modal-dialog__submit'
            />

            <a href='/auth' class='modal-dialog__link'>Войти в аккаунт</a>

          </form>
        </div>

      </section>
    </main>

`

   
