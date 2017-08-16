module.exports = {
    baseUrl: 'http://localhost:10010',
    paths: {
        Login: '/login'
    },
    lang: 'tr',
    titles: {
        tr: {
            login: 'MİLAT | Giriş',
            admin: 'MİLAT | Yönetici'
        },
        en: {
            login: "MILAT | Login",
            admin: "MILAT | Admin"
        }
    },
    tabs: {
        number: 8,
        tab_topology: 1,
        tab_user_mng: 7
    },
    credentials: {
        correct: {
            username: 'prognet',
            password: 'prognet'
        },
        wrong: {
            username: 'adminx',
            password: '123456'
        }
    },
    user: {
        username: 'aaaUser',
        password: 'aaa01B!',
        password_mod: 'aaa01C!',
        name: 'Ali',
        name_mod: 'Veli',
        surname: 'KırkDokuzElli',
        email: 'av4950@example.com',
        note: 'TEST'
    },
    role: {
        name: 'aaaRole',
        note: 'TEST',
        name_mod: 'aaaRole-mod'
    },
    screenshots: {
        width: 1600,
        height: 900,
        path: './screenshots/success'
    },
    searchTableInBrowser: function (search) {
        var table = document.getElementsByTagName('table')[0];
        var rows = table.getElementsByTagName('tr');
        var f_row = 0;
        var f_cell = 0;

        for (var i = 0; i < rows.length; i++) {
            (function(k) {
                var cells = rows[k].getElementsByTagName('td');
                for (var j = 0; j < cells.length; j++) {
                    (function(m) {
                        var val = cells[m].innerHTML;
                        if (val === search) {
                            f_row = k;
                            f_cell = m;
                        }
                    })(j);
                }
            })(i);
        }

        return [f_row, f_cell];
    }
}
