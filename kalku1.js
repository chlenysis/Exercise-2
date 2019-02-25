
	<script type="text/javascript">
    var val1 = 0;
    var val2 = 0;
    var op = '';
    var result = 0;
    function displaynum(n1) {
        document.forms["calcform"]["text1"].value = document.forms["calcform"]["text1"].value + n1;
    }
    function calcevent(operator) {
        val1 = document.forms["calcform"]["text1"].value;
        op = operator;
        
        document.forms["calcform"]["text1"].value = '';
    }
    function calc() {

        val2 = document.forms["calcform"]["text1"].value;
        if( op=='+' ) {

            result = +val1 + +val2;

            document.forms["calcform"]["text1"].value = result;


        }

        if( op=='-' ) {

            result = +val1 - +val2;

            document.forms["calcform"]["text1"].value = result;


        }

        if( op=='*' ) {

            result = +val1 * +val2;

            document.forms["calcform"]["text1"].value = result;


        }

        if( op=='/' ) {

            result = +val1 / +val2;

            document.forms["calcform"]["text1"].value = result;


        }

        if( op=='%' ) {

            result = +val1 % +val2;

            document.forms["calcform"]["text1"].value = result;


        }
    }
</script>