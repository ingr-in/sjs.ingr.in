import mekk from './mahi/mekk.js';

const loginForm = mekk.form(

  { .class: 'login-form' },
  { #id: 'loginForm' },

  mekk.h2(
    'Login',
    { .class: 'login-title' }
  ),

  mekk.div(

    { .class: 'form-group' },

    mekk.label(
      'Email',
      { for: 'email' }
    ),

    mekk.input.email(

      { #id: 'email' },

      {
        .class: 'form-control'
      },

      {
        placeholder:
          'Enter email'
      },

      {
        required: true
      }

    )

  ),

  mekk.div(

    { .class: 'form-group' },

    mekk.label(
      'Password',
      { for: 'password' }
    ),

    mekk.input.password(

      { #id: 'password' },

      {
        .class: 'form-control'
      },

      {
        placeholder:
          'Enter password'
      },

      {
        required: true
      }

    )

  ),

  mekk.button(

    'Login',

    {
      .class:
        'btn btn-primary'
    },

    {
      type: 'submit'
    },

    {
      events: {

        click: (e) => {

          e.preventDefault();

          const email =
            mekk.findById(
              'email'
            ).value;

          const password =
            mekk.findById(
              'password'
            ).value;

          console.log({
            email,
            password
          });

          alert(
            `Email: ${email}`
          );

        }

      }
    }

  )

);

// STYLE
const style =
  document.createElement(
    'style'
  );

style.textContent = `
body{
  margin:0;
  font-family:Arial;
  background:#f5f5f5;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}

.login-form{
  width:320px;
  background:white;
  padding:25px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,.1);
}

.login-title{
  margin-bottom:20px;
  text-align:center;
}

.form-group{
  margin-bottom:15px;
}

.form-control{
  width:100%;
  padding:10px;
  border:1px solid #ccc;
  border-radius:6px;
  box-sizing:border-box;
}

.btn{
  width:100%;
  padding:10px;
  border:none;
  border-radius:6px;
  cursor:pointer;
}

.btn-primary{
  background:#2563eb;
  color:white;
}
`;

document.head.appendChild(
  style
);

// APPEND
mekk.run(() => {

  mekk.append(
    document.body,
    loginForm
  );

});
