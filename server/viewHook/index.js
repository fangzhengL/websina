/**
 * Created by hzn on 2017/6/5.
 */
import html  from  "./html"

export default function viewhook() {
    return async  function (ctx,next) {
        ctx.render = function () {


        }

        ctx.body = html()
    }
}