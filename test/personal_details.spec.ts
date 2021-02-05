import {Selector} from "testcafe";
import sleep from "../src/func_utils"


fixture `Personal Details Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('test username', async t => {
        const username = Selector('#username');

        await t     // We wait on a Promise
            .typeText(username, 'species8472')
            .expect(username.value).contains('species8472', 'input contains the test "species8472"')
        //await sleep(3000);
    });

    test('test date field', async t => {
        const birthday = Selector('#birthday');
        const age = Selector("#age");

        await t     // We wait on a Promise
            .typeText(birthday, '1998-01-30')
            .expect(age.innerText).contains('23', 'the user is "23"')
        await sleep(3000);
    });
