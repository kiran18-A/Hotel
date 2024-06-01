var spass=1234;
        do
        {
            var epass=prompt("enter a password");
            if(spass==epass)
            {
                var set="true"
            }
            else
            {
                alert("You enter wrong password (It is only for hotel use)")
            }
        }while(set!="true");