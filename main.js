document.getElementById("Pas").style.display = 'none';
document.getElementById("Pass").style.display = 'none';

function MakePass()
{
        let Letters = "ABCDEFGHKLMOP012345678910abcdefghklmop";
        let Letter = [];
        for(let i = 0; i < 7; i++)
        {
            Letter.push(Letters[Math.floor(Math.random() * Letters.length)]);
        };
        let FinalPass = `${Letter.join("")}`;
        document.getElementById("Pas").append(FinalPass);
}
MakePass();



document.getElementById("BTN").addEventListener("click", function()
{
    document.getElementById("Pas").style.display = 'block';
    document.getElementById("Pass").style.display = 'block';
})
document.getElementById("BT").onclick = function ()
{
    location.reload();
}

document.getElementById("4").onclick = function ()
{
    function MakePas()
    {
        let Letters = "ABCDEFGHKLMOP012345678910/*-+.~!@#$%^&*()_+";
        let Letter = [];
        for(let i = 0; i < 7; i++)
        {
            Letter.push(Letters[Math.floor(Math.random() * Letters.length)]);
        };
        let FinalPass = `${Letter.join("")}`;
        document.getElementById("Pass").append(FinalPass);
    }
    MakePas();
}