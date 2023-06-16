import jsonp from '../../dist/index.es';

const btn = document.querySelector('#btn');
const preview = document.querySelector('#preview');

btn.addEventListener('click', () => {
    jsonp(
        'http://localhost:9096/api/search?name=123',
        { prefix: 'jsonpCallback', data: { customKey: 'value', callback: 's123' } },
        (error, data) => {
            console.log({ error, data });
            if (error) {
                preview.innerHTML = 'some thing error';
            } else {
                preview.innerHTML = JSON.stringify(data);
            }
        }
    );
});
