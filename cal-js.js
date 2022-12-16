function insert(num)
{
    document.calc.textView.value = document.calc.textView.value + num
}

function clean()
{
    document.calc.textView.value = "";
}

function equal()
{
    var eql = document.calc.textView.value;
    
    if (eql)
    {
        document.calc.textView.value = eval(eql);
    }
}