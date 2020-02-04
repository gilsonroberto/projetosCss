     var val1 = 0;
     var val2 = 6500;
     var val3 = 6501;
     var val4 = 8000;
     var val5 = 8001;
     var val6 = 10000;
     var val7 = 10001;
     var val8 = 12000;
     var val9 = 12001;
     var val10 = 15000;
     var val11 = 15001;
     var val12 = 20000;
     var val13 = 20001;
     var val14 = 25000;
     var val15 = 25001;
     var coop1 = 1391.50;
     var coop2 = 1474;
     var coop3 = 1556.50;
     var coop4 = 1694;
     var coop5 = 1831.50;
     var coop6 = 1969;
     var coop7 = 2150.50;
     var coop8 = 2565.05;
     var vinte = 20/100;
     var sete = 7/100;

function ValorBruto() 
{
    var Vh = document.getElementById("vlrH").value;
    var Ht = document.getElementById("hTrab").value;
    var vlt = document.getElementById("vt").value;
    var vlr = document.getElementById("vr").value;
    if(vlt == "")
    {
        document.getElementById("vt").value = "0,00";
    }

    if(vlr == "")
    {
        document.getElementById("vr").value = "0,00";
    }
    var transp = parseFloat(vlt.replace(",",".")); 
    var ref = parseFloat(vlr.replace(",","."));
    var Valor = parseFloat(Vh.replace(",","."));
    var Hora = parseFloat(Ht.replace(",","."));
    var result = Valor * Hora;
    var money = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var desc = result*sete;
    var descCoop = desc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById("vlrB").value = money;


    if(val1 <= result && result <= val2)
    {
        var convert1 = coop1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert1; 
        var mult = coop1*vinte;
        var descInss = mult.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss;
        var totalDesc = desc+mult+transp+ref;
        var vlDesc = totalDesc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc;
        var pgto = result - totalDesc;
        var salario = pgto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario;
    }

    
    if(val3 <= result && result <= val4)
    {
        var convert2 = coop2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert2; 
        var mult2 = coop2*vinte;
        var descInss2 = mult2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss2;
        var totalDesc2 = desc+mult2+transp+ref;
        var vlDesc2  = totalDesc2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc2 ;
        var pgto2 = result - totalDesc2;
        var salario2 = pgto2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario2;

    }

    
    if(val5 <= result && result <= val6)
    {
        var convert3 = coop3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert3;
        var mult3 = coop3*vinte;
        var descInss3 = mult3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss3; 
        var totalDesc3 = desc+mult3+transp+ref;
        var vlDesc3 = totalDesc3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc3;
        var pgto3 = result - totalDesc3;
        var salario3 = pgto3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario3;
    }

    
    if(val7 <= result && result <= val8)
    {
        var convert4 = coop4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert4;
        var mult4 = coop4*vinte;
        var descInss4 = mult4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss4;
        var totalDesc4 = desc+mult4+transp+ref;
        var vlDesc4 = totalDesc4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc4;
        var pgto4 = result - totalDesc4;
        var salario4 = pgto4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario4;
    }

    
    if(val9 <= result && result <= val10)
    {
        var convert5 = coop5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert5;
        var mult5 = coop5*vinte;
        var descInss5 = mult5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss5;
        var totalDesc5 = desc+mult5+transp+ref;
        var vlDesc5 = totalDesc5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc5;
        var pgto5 = result - totalDesc5;
        var salario5 = pgto5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario5;
    }

    
    if(val11 <= result && result <= val12)
    {
        var convert6 = coop6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert6;
        var mult6 = coop6*vinte;
        var descInss6 = mult6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss6; 
        var totalDesc6 = desc+mult6+transp+ref;
        var vlDesc6 = totalDesc6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc6;
        var pgto6 = result - totalDesc6;
        var salario6 = pgto6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario6;
    }
    
    
    if(val13 <= result && result <= val14)
    {
        var convert7 = coop7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert7;
        var mult7 = coop7*vinte;
        var descInss7 = mult7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss7; 
        var totalDesc7 = desc+mult7+transp+ref;
        var vlDesc7 = totalDesc7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc7;
        var pgto7 = result - totalDesc7;
        var salario7 = pgto7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario7;
    }

    
    if(val15 <= result && result >= val15)
    {
        var convert8 = coop8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("vlrP").value = convert8;
        var mult8 = coop8*vinte;
        var descInss8 = mult8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("descInss").value = descInss8; 
        var totalDesc8 = desc+mult8+transp+ref;
        var vlDesc8 = totalDesc8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("totDesc").value = vlDesc8;
        var pgto8 = result - totalDesc8;
        var salario8 = pgto8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("sal").value = salario8;
    }
        document.getElementById("desc").value = descCoop;
}

function LimparGrid()
{
    document.getElementById("vlrH").value ="";
    document.getElementById("hTrab").value ="";
    document.getElementById("vlrB").value ="";
    document.getElementById("vlrP").value ="";
    document.getElementById("desc").value ="";
    document.getElementById("descInss").value ="";
    document.getElementById("vt").value ="";
    document.getElementById("vr").value ="";
    document.getElementById("totDesc").value ="";
    document.getElementById("sal").value ="";
}

function ConverteParaMoeda(val, e, r, t) {
    var n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = val.value.length,
    h = 0; h < u && ("0" == val.value.charAt(h) || val.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(val.value.charAt(h)) && (l += val.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (val.value = ""),
    1 == u && (val.value = "0" + r + "0" + l),
    2 == u && (val.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (val.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            val.value += ajd2.charAt(h);
        val.value += r + l.substr(u - 2, u)
    }
    return !1
}

