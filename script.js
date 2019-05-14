
document.write('<table align=center border=1 cellpadding=4 width=320>');

for( i=1 ; i<=10; i++ )
{
document.write( "<tr align=right>" )
document.write( "   <td width=64>" +          i    + "</td>" )
document.write( "   <td width=64>" +      i * i    + "</td>" )
document.write( "   <td width=64>" + Math.pow(i,3) + "</td>" )
document.write( "   <td width=64>" + Math.pow(i,4) + "</td>" )
document.write( "   <td width=64>" + Math.pow(i,5) + "</td>" )
document.write( "</tr>")
}

document.write('</table>');