const nomeInput = document.querySelector('#nome');
const idadeInput = document.querySelector('#idade');
const sexoInput = document.querySelector('#sexo');
const telefoneInput = document.querySelector('#telefone');
const horarioInput = document.querySelector('#horario');
const expInput = document.querySelector('#exp');
const pqInput = document.querySelector('#pq');

const button = document.querySelector('form button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    sendContact(e);
})


async function sendContact(ev) {
    ev.preventDefault();
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const sexo = sexoInput.value;
    const telefone = telefoneInput.value;
    const horario = horarioInput.value;
    const exp = expInput.value;
    const pq = pqInput.value;

    const webhookBody = {
      embeds: [{
        title: 'Currículo do site',
        fields: [{
            name: 'Nome:',
            value: nome
          },
          {
            name: 'Idade:',
            value: idade
          },
          {
            name: 'Sexo:',
            value: sexo
          },
          {
            name: 'Telefone:',
            value: telefone
          },
          {
            name: 'Horários Disponíveis:',
            value: horario
          },
          {
            name: 'Experiência:',
            value: exp
          },
          {
            name: 'Porque quer trabalhar conosco:',
            value: pq
          },
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1235729776652587039/srJrH1gPIg1d_q44oMKbLPXntr12-isDWlNs-uypn3A52q4MRS1XvoCS9M3jV1VzeuLl';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    if (response.ok) {
      alert('Agora é só isperá!');
    } else {
      alert('Nois num recebemo, manda traveiz');
    }
  }