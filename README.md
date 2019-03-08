# legal-film-streaming

Live demo : http://toko-flix-film.herokuapp.com/

Dibuat dengan
- React
- Redux
- Webpack
- Server side rendering
- Progressive web apps

Fitur 
- Loading konten 
- Image rendering dengan merender image kecil terlebih dahulu
- Meta tag
- Rating tiap 1 page berisi 20 movie
- Handle image broken

Kenapa membuat dengan server side rendering ?\
karna menurut saya seorang front end engineer juga harus memberi perhatian terhadap SEO


### Instalasi
NPM dan Node yang digunakan saat membuat web ini\
NPM 6.4.1\
Node v10.15.0

Agar lebih mudah menjalankan program ini,\
Anda sangat disarankan install docker dan pastikan docker tersebut running

### Jika sudah install docker  
Clone repository ini\
Pindah ke foldernya\
dan jalan kan via terminal seperti berikut

```sh
$ docker-compose up
```
tunggu sampai muncul info diterminal "Listening on port 5000"\
open in browser http://localhost:5000

Jika tidak ingin install docker, bisa dengan alternatif dibawah ini

### Jika tidak install docker
Clone repository ini\
Pindah ke foldernya\
dan jalan kan via terminal seperti berikut

```sh
$ npm run prod-local
```
tunggu sampai muncul info diterminal "Listening on port 5000"\
open in browser http://localhost:5000
