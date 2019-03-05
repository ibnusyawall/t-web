/* created by ibnu syawall */
/* T-Web ( Termux On Localhost ) */

// ---------- module ----------

var red = require('readline');  // npm install --save readline
var she = require('shelljs' );  // npm install --save shelljs
var war = require('colors'  );  // npm install --save colors

// ---------- warna ----------

war.setTheme({
  k : 'yellow',
  h : 'green',
  b : 'blue',
  m : 'red'
});

// ---------- clear line ----------

she.exec('clear off');

// ---------- banner ----------

she.echo('  _____'.b + ' _ _ _     _');
she.echo(' |_   _'.b + '| | | |___| |_');
she.echo('   | | '.b + '| | | | -_| . |');
she.echo('   |_| '.b + '|_____|___|___|');
she.echo('');
she.echo("     I".m + "bnu " + "S".m + "yawall");
she.echo(" 407 Authentic Exploit"); she.echo('');

// ---------- pilih ----------

pil = ' ['.k; ih = '] '.k;
she.echo(' --------------- '); she.echo('');
she.echo(pil + '1'.h + ih + 'Setting Up');
she.echo(pil + '2'.h + ih + 'Jalankan T-Web');
she.echo(pil + '3'.h + ih + 'Share T-Web');
she.echo(pil + '0'.h + ih + 'Keluar');

// ---------- tanya ----------

const why = red.createInterface({
  input : process.stdin,
  output: process.stdout
}); she.echo(''); she.echo(' --------------- '); why.question(' [ T-Web ] > ', (iya) => {

// ---------- cuss ----------

if (`${iya}` == 1)
{
  she.echo(' ---------- Harap Tunggu ----------');she.echo('');
  she.exec('pkg install ttyd && pkg install ssh'); why.close(); she.exec('clear off');
  she.echo(' ---------- Module Sudah Terinstall ----------');she.exec('clear off && ls');
  she.echo(pil + ' Silahkan Jalankan Ulang Dan Pilih No 1 atau 2 ' + ih)
}
else if (`${iya}` == 2)
{
  she.echo(' ---------- Setting Port ----------');
  why.question(pil + '!'.m + ih + 'Masukan Port : ', (hmm) => {
    she.echo(' ---------- Harap Tunggu ----------');she.exec('clear off');
    she.echo(' ---------- [ Tekan CTRL + C Untuk Keluar ] ----------');
    she.echo(` ---------- [       localhost:${hmm}        ] ----------`);why.close();
    she.echo(''); she.exec(`ttyd -p ${hmm} bash -x`);
  });
}
else if (`${iya}` == 3)
{
  she.echo(' ---------- Harap Tunggu ----------');
  why.question(pil + '!'.m + ih + 'Masukan Port Kamu : ', (gk) => {
    she.exec('clear off');she.echo(' ---------- [ Salin Url Yang Berwarna Hijau ] ----------'); why.close();
    she.exec(`ssh -R 80:127.0.0.1:${gk} serveo.net`);
  });
}
else if (`${iya}` == 0)
{
  she.echo(' ---------- Harap Tunggu ----------'); she.exec('clear off');
  she.echo(' ---------- [ Thanks For Using This Tools ^_^ ] ----------'); why.close(); she.exec('clear off && ls');
}
else
{
  she.echo(pil + '!'.m + ih + 'Masukan Command Dengan Benar ! '); why.close(); she.exec('clear off && ls')
}; });

// ---------- done ----------
