var init = (app: any) => {
  app.all("*", function (req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);
    else
      next();
  });
}

module.exports = {
  init
}