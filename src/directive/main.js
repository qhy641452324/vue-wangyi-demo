import Vue from 'vue';

function changecolor(el){
    let defaults = {
        color: ["#fff", "#ffe2d1", "#ffc2a1", "#ffa370", "#ff8340", "#ff630f"],
        blinktime: 100, //每帧时间 毫秒
        circle: 3 
    }
    if (isNaN(el.innerText)) { 
        defaults.color = ["#333"]
    } else {
        if (el.innerText > 0) {
            defaults.color = ["#FFDDDD", "#FFEEEE","red"]
        }
        if (el.innerText < 0) {
            defaults.color = ["#b4f7af", "#ccffcc","green"]
        }
        if (el.innerText == 0) {
            defaults.color = ["#333"]
        }
    }

    // let _options = jQuery.extend(defaults, options);
    let _options = defaults;
    let loop = 0;
    for (let i = 0; i < _options.color.length * _options.circle; i++) {
        setTimeout(function () {
            el.style.color = _options.color[loop];
            loop++;
            loop = loop % _options.color.length;
        }, _options.blinktime * i);
    }
}

Vue.directive('hqcolor',{
    bind(el, binding){
        console.log(binding)
        changecolor(el);
    },
    inserted(el, binding) {//在将绑定元素插入其父节点中时调用,
        // changecolor(el);
        console.log('被绑定自定义指令的元素插入其父节点时进行调用');
    },
    update(el, binding) {//在包含组件的VNode更新之后，但也有可能会在其子组件更新之前调用
        // changecolor(el);
        console.log('被绑定自定义指令的元素发生改变/更新时进行调用');
    }, 
    componentUpdated(el, binding, vnode, oldVnode) { 
        changecolor(el); 
        console.log('被绑定自定义指令的元素发生改变/更新之后进行调用');
    },
    unbind() {//指令没用绑定到元素上时进行调用

    }  
});

Vue.directive('loadmore', {
    bind(el, data) {
        el.addEventListener('scroll', data.def.onScroll.bind(null, data))
    },
    inserted(el, binding) {//在将绑定元素插入其父节点中时调用,

    },
    update(el, binding) {//在包含组件的VNode更新之后，但也有可能会在其子组件更新之前调用

    },
    componentUpdated(el, binding, vnode, oldVnode) {

    },
    unbind(el, data) {//指令没用绑定到元素上时进行调用
        el.removeEventListener('scroll', data).def.onScroll.bind(null, data)
    },
    onScroll(data, event) {
        let target = event.target;
        let loadMoreConfig = data.value;
        let screenHeight = target.offsetHeight;
        let scrollTop = target.scrollTop;
        let totalHeight = target.scrollHeight;
        if (!loadMoreConfig.loading && totalHeight > screenHeight && totalHeight - scrollTop - screenHeight < loadMoreConfig.scrollBottomOffset) {
            loadMoreConfig.onScrollBottom();
            loadMoreConfig.loading = true;
        }
    }
});