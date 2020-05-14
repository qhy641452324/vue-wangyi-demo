// 获取事件中心
import eventBus from "./enventbus";
export function confirmDialog({ title, text, cancelText, confirmText }) {
    return new Promise((resolve, reject) => {
        // 把 reject 和 resolve 通过 emit 事件传参带过去，方便进行 Promise 状态扭转
        eventBus.emit("setDialog", {
            title,
            text,
            cancelText,
            confirmText,
            resolve,
            reject
        });
    });
}

/**
 * eventbus
*/


/**\
 * 全局共享对象会在页面刷新后消失
 * 更好的方式是存储在cookie或者缓存里面
 * */ 


/**
 * vuex
*/