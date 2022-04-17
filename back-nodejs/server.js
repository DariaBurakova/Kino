const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const console = require("console");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.header(("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"));
      return res.status(200).json({});
    }
    next();
});

app.get("/films", (req, res) => {
  fs.readFile("films.json", "utf-8", (err, data) => res.send(data));
});
app.get("/films/:genre", (req, res) => {
  fs.readFile("films.json", "utf-8", (err, data) => {
    const filtred = JSON.parse(data).filter(
      film => film.genre.includes(req.params.genre)
    )
    res.send(filtred)
  });
});

app.get("/poster/:file", (req, res) => {
  const filePath = './pictures/' + req.params.file;
  // console.log("Запрос " + filePath);
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
    } else {
      fs.createReadStream(filePath).pipe(res);
    }
  })
});

app.get("/genres", (req, res) => {
  fs.readFile("genres.json", "utf-8", (err, data) => res.send(data));
});

app.get("/carousel.json", (req, res) => {
  fs.readFile("carousel.json", "utf-8", (err, data) => res.send(data));
});

app.get("/carousel.json", (req, res) => {
  fs.readFile("carousel.json", "utf-8", (err, data) => res.send(data));
});

const port = process.env.PORT || 3003;

app.get("/person", (req, res) => {
  fs.readFile("person.json", "utf-8", (err, data) => {
      const p = JSON.parse(data)
      p.map(element => {
        element.img = "http://localhost:" + port + "/poster/" + element.img
      })
      res.send(p)
    });
});

app.get("/films/:route/genres", (req, res) => {
  fs.readFile("genres-by-film.json", "utf-8", (err, data) => {
    const genres = JSON.parse(data).find(item => { 
      return item.filmRoute === req.params.route
    }).genre
    fs.readFile("genres.json", "utf-8", (err, data) => {
      const gStruct = genres.map(genre => {
        return JSON.parse(data).find(item => { 
          return item.route === genre
        })
      })
      res.send(JSON.stringify(gStruct))
    });
  });
});

app.get("/films/:route/actors", (req, res) => {
  fs.readFile("actors-by-film.json", "utf-8", (err, data) => {
    const actors = JSON.parse(data).find(item => { 
      return item.filmRoute === req.params.route
    }).actors
    fs.readFile("person.json", "utf-8", (err, data) => {
      const pStruct = actors.map(p => {
        return JSON.parse(data).find(item => { 
          return item.route === p
        })
      })
      res.send(JSON.stringify(pStruct))
    });
  });
});

app.get("/films/:route/directors", (req, res) => {
  fs.readFile("directors-by-film.json", "utf-8", (err, data) => {
    const directors = JSON.parse(data).find(item => { 
      return item.filmRoute === req.params.route
    }).director
    fs.readFile("person.json", "utf-8", (err, data) => {
      const pStruct = directors.map(p => {
        return JSON.parse(data).find(item => { 
          return item.route === p
        })
      })
      res.send(JSON.stringify(pStruct))
    });
  });
});

app.listen(port, () => console.log(`Listening port ${port}...`));