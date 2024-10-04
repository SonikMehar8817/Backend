// let movie = require('movie-trailer')
// console.log(movie,"hanuman");
 

// let fs = require('fs')

//create
// fs.writeFileSync('fsd9.css','sonik')

//rename file
// fs.renameSync('fsd9.css','fsd3.html')

//read
// let data = fs.readFileSync('fsd3.html')
// console.log(data.toString());

//delete file
// fs.unlinkSync('fsd3.html')
// fs.unlinkSync('fsd9')





// fs.writeFile("index.html", "<h1>sonik</h1>", (err) => {
//   if (err) throw err;
//   console.log("code chal gaya");
// });

// fs.rename("style.css", "Index.html", (err) => {
//   if (err) throw err;
//   console.log("code chal gaya");
// });

// fs.readFile('style.css',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());
// })

// fs.appendFile('style.css','hello',(err)=>{
//   if (err) throw err;
//       console.log("code chal gaya");
//   })

// fs.writeFile("style.css", "sonik ", (err) => {
//   if (err) throw err;
//   console.log("code chal gaya");
// });

// fs.unlink('index.html',()=>{
//     console.log("delete ho gai");
// })



// let http = require('http')

// let server = http.createServer((req,res)=>{
//     res.end("done")
// })

// server.listen(5000,()=>{
//     console.log("server char gaya ");
// })

// let express = require('express')

// let app = express()

// app.use((req,res)=>{
// res.send('hehjhe')
// })

// app.listen(4000,()=>{
//     console.log("server is running on port number 4000");
// })

// app.get("/", (req, res) => {
//   res.send("home");
// });
// app.get("/cat", (req, res) => {
//   res.send("miau");
// });

// app.get("/dog", (req, res) => {
//   res.send("bho");
// });

// app.get("*", (req, res) => {
//   res.send("m");
// });
// app.listen(4001, () => {
//   console.log("server is running on port number 4000");
// });


// let express = require('express')

// app = express();

// app.get('/',(req,res)=>{
//   res.send('hello')
// })

//path parameter
// app.get('/:b/:a',(req,res)=>{
//   let {b,a} = req.params
//   res.send(`${b} and ${a}`)
// })

// app.listen('5000',()=>{
//   console.log('hhhhh');
// })
//query parameter
// app.get('/search',(req,res)=>{
//   console.log('hehe');
//   console.log(req.query);
//   let {firstName,lastName}= req.query
//   res.send(`${firstName}  ${lastName}`)
// })


// let express = require("express");

// app = express();
// app.listen("5000", () => {
//   console.log("hhhhh");
// });

// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//   res.render('index')
// })

// app.listen(4000,()=>{
//   console.log("server running on port no 4000");
// })

// let express = require("express");

// let app = express();

// app.use((req, res) => {
//   res.send("wow");
// });

// app.get('/',(req,res)=>[
//   res.send('home')
// ])
// app.get('/cat',(req,res)=>{
//   res.send('cat')
// })

// app.get('/dog',(req,res)=>{
//   res.send('dog')
// })

// app.get('/*',(req,res)=>{
//   res.send("matlab kuch bhi")
// })

// app.listen("4", () => {
//   console.log("server is running on port number 4");
// });


//path parameter

// express = require('express');

// app = express()

// app.get('/',(req,res)=>{
//   res.send('home')
// })
// app.get('/:variable',(req,res)=>{
//   let {variable}=req.params

//   res.send(variable)

// })

// app.get('/:a/:b',(req,res)=>{
//   let {a,b}=req.params
//   res.send(`${a} ${b}`)
// })

// app.listen('6',()=>{
//   console.log('server is running on port number 6');
// })

// //quiry parameter

// let express = require('express')

// let app = express()

// app.get('/search',(req,res)=>{
//   let {FN,LN} = req.query
//   res.send(`${FN}  ${LN}`)
// })

// app.listen('8',()=>{
//   console.log("8");
// })


// let express = require('express')

// let app = express();
// app.set("view engine", "ejs");

// app.set('veiw engine','ejs')
// app.get('/',(req,res)=>{
//   a = ['sonik','rishi','sourabh']
//   res.render('randam',{a})
// })
// app.get('/',(req,res)=>{
//   a = Math.floor(Math.random()*10)

//   res.render('randam',{a})
// })

// app.listen(9000,()=>{
//   console.log("9");
// })



// let express = require('express')

// let app = express();
// app.set('veiw engine','ejs')
// app.use(express.static('public'))
// app.get('/:x',(req,res)=>{
//   let count = 0;
//   let arr = {a,b,c,a}
//   let {x} = req.params

//   res.render('randam',{x},{arr},{count})
// })
// app.get('/',(req,res)=>{
//   res.render('index')
// })

// app.listen(9000,()=>{
//   console.log("9");
// })

// let express = require("express");

// let app = express()

// app.set('view engine','ejs');

// app.use(express.static('public'))

// app.get('/',(req,res)=>{
//   let a = Math.random();
//   res.render('demo',{a})
// })
// app.get('/:x',(req,res)=>{
//   let {x} = req.params
//   let arr = ['a','b','c','a','a','a','a','a'];
//   let count = 0;
  
//   res.render('demo',{arr,x,count})
  
// })

// app.listen(4000,()=>{
//   console.log("server is running on port no. 4000");
// })



//_________________________linking files______________________________

// let express = require('express')

// let app = express();

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// app.set('view engine','ejs')

// app.use(express.static('public'))

// app.get('/',(req,res)=>{
//   res.render('index')
// })
// app.get('/user',(req,res)=>{
//   console.log(req.query, "hhh");
//   let{name,email,password}=req.query
//   res.send(`${name} <br> ${email} <br>  ${password}`)

  
// })
// app.post('/user',(req,res)=>{
//    console.log(req.body,"hhhh");
//   res.send("hhhhh")

  
// })

// app.listen(5000,()=>{
 
//   console.log("running");
// })



// let express = require("express")

// let app = express()

// app.set('view engine','ejs')

// app.use(express.static('public'))

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// app.get('/',(req,res)=>{
//   res.render('index')
// })

// app.get('/user',(req,res)=>{
//   console.log(req.query, "hhh");
//   let { name, email, password } = req.query;
//   res.send(`${name} <br> ${email} <br>  ${password}`)
//   // res.send('hhhh')
// })

// app.post('/user',(req,res)=>{
//   console.log(req.body);
//   let {name,email,password}=req.body;
//   res.send(`${name} <br> ${email} <br>  ${password}`);


// })
// app.listen(8000,()=>{
//   console.log("running");
// })
//_________________________Crud Opretions_______________________________




// let express = require('express')
// let methodOverride = require('method-override')
// let app = express();

// app.use(methodOverride('_method'))

// app.set('view engine','ejs')

// app.use(express.urlencoded({extended:true}))
//  let comments = [
//    {
//      id: 0,
//      username: "Sam",
//      comment: "chitkara is a nice university 0",
//    },
//    {
//      id: 1,
//      username: "g2",
//      comment: "chitkara is a nice university 1",
//    },
//    {
//      id: 2,
//      username: "vohra",
//      comment: "chitkara is a nice university 2",
//    },
//  ];
// app.get('/blog',(req,res)=>{
 
//     res.render("index",{comments})
// })

// app.get('/blog/new',(req,res)=>{
//     res.render("new");
// })

// app.post('/blog',(req,res)=>{
//     console.log(req.body,"hello")
//     let id = comments.length
//     let{username,comment}=req.body
//     comments.push({ username, comment,id });
//     res.redirect('/blog')
    
// })

// app.get('/blog/:id',(req,res)=>{
//   let{id}=req.params
//   console.log(id,"iiii");
//   let data = comments.find((data)=>{return data.id == id;});
//   console.log(data,"data");
//   res.render('update',{data})
// })

// app.patch('/blog/:id',(req,res)=>{
//   let{id} = req.params
//   console.log(id,'eje');
//   let{username,comment}=req.body

//   let data = comments.find((data)=>{return data.id==id})
//   console.log(data,'data');

//   data.comment=comment
//   data.username = username
//   res.redirect('/blog')
// })

// app.delete('/blog/:id',(req,res)=>{
//   let{id}=req.params
//   newData = comments.filter((data)=>{
//     return data.id != id
//   })
//   comments = newData;
//   res.redirect('/blog')
// })

// app.listen(4000,()=>{
//   console.log("running");
// })






let express = require("express");
// let methodOverride = require("method-override");
let methodOverride = require('method-override')
let app = express();

// app.use(methodOverride("_method"));
app.use(methodOverride('_method'))

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
let comments = [
  {
    id: 0,
    username: "Sam",
    comment: "chitkara is a nice university 0",
  },
  {
    id: 1,
    username: "g2",
    comment: "chitkara is a nice university 1",
  },
  {
    id: 2,
    username: "vohra",
    comment: "chitkara is a nice university 2",
  },
];

app.get('/blog',(req,res)=>{
  res.render('index',{comments})
})

app.listen(4000,()=>{
  console.log('server is running on port number 4000');
})

app.get('/blog/new',(req,res)=>{
  res.render('new')
})

app.post('/blog',(req,res)=>{
  let {username,comment}=req.body
  id = comments.length
  comments.push({username,comment,id})
  res.redirect('/blog')
})

app.get('/blog/:id',(req,res)=>{
  let {id}=req.params
  let data = comments.find((data)=>{return data.id==id})
  console.log(data);
  res.render('update',{data})
})

app.patch('/blog/:id',(req,res)=>{
  let {id}= req.body
  let{username,comment}=req.body
  comments.find((data)=>{return data.id==id})
  data.username=username;
  data.comment = comment;
  res.redirect('/blog')

})


















