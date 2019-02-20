var mg = require('mongoose');


if(process.env.NODE_ENV == 'test')
{
    mg.connect('mongodb://localhost/week4-test');
}
else
{
    mg.connect('mongodb://localhost/week4');
}

