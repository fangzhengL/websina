/**
 * Created by hzn on 2017/6/5.
 */



import path from 'path'
import Koa from 'koa'
import matchRouter from "./matchRoute"
import router from "./Routers/Home"
import routers from "../src/router"
new Koa().use(matchRouter(routers)).use(router.routers()).use(router.allowedMethods())