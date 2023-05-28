import { _ as __nuxt_component_0 } from "./nuxt-link-06d83316.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "destr";
import "defu";
const selecao_vue_vue_type_style_index_0_scoped_dd9546d5_lang = "";
const _sfc_main = {
  data: () => ({
    produtos: [
      {
        img: "/img/produtos/cenoura.jpeg",
        descricao: "Cenoura"
      },
      {
        img: "/img/produtos/batata.jpeg",
        descricao: "Batata"
      },
      {
        img: "/img/produtos/cebola.jpeg",
        descricao: "Cebola"
      },
      {
        img: "/img/produtos/tomate.jpeg",
        descricao: "Tomate"
      },
      {
        img: "/img/produtos/feijao.jpeg",
        descricao: "Feijão"
      }
    ]
  }),
  methods: {
    verImg(img) {
      return `background-image: url(${img})`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Selecao pa-10" }, _attrs))} data-v-dd9546d5><div class="imgFazenda rounded-xl" data-v-dd9546d5><div class="sombra pa-10 rounded-xl" data-v-dd9546d5><h1 class="text-center text-white" data-v-dd9546d5>Selecione o produto para ver o seu processo evolutivo</h1></div></div><div class="avo" data-v-dd9546d5><div class="pai" data-v-dd9546d5><!--[-->`);
  ssrRenderList(_ctx.produtos, (produto, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/processos",
      class: "filho rounded-xl",
      key: index,
      style: $options.verImg(produto.img)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="sombra rounded-xl d-flex justify-center align-center" data-v-dd9546d5${_scopeId}><h2 class="text-center text-white" data-v-dd9546d5${_scopeId}>${ssrInterpolate(produto.descricao)}</h2></div>`);
        } else {
          return [
            createVNode("div", { class: "sombra rounded-xl d-flex justify-center align-center" }, [
              createVNode("h2", { class: "text-center text-white" }, toDisplayString(produto.descricao), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plantacao/selecao.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const selecao = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dd9546d5"]]);
export {
  selecao as default
};
//# sourceMappingURL=selecao-126a9c4a.js.map
