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
const provincias_vue_vue_type_style_index_0_scoped_33652628_lang = "";
const _sfc_main = {
  data: () => ({
    produtos: [
      {
        img: "/img/provincias/Luanda.jpeg",
        descricao: "Luanda"
      },
      {
        img: "/img/provincias/Benguela.jpeg",
        descricao: "Benguela"
      },
      {
        img: "/img/provincias/Cunene.jpeg",
        descricao: "Cunene"
      },
      {
        img: "/img/provincias/Namibe.jpeg",
        descricao: "Namibe"
      },
      {
        img: "/img/provincias/Cabinda.jpeg",
        descricao: "Cabinda"
      },
      {
        img: "/img/provincias/huila.jpeg",
        descricao: "Huíla"
      },
      {
        img: "/img/provincias/Zaire.jpeg",
        descricao: "Zaire"
      },
      {
        img: "/img/provincias/Bie.jpeg",
        descricao: "Bié"
      },
      {
        img: "/img/provincias/Huambo.jpeg",
        descricao: "Huambo"
      },
      {
        img: "/img/provincias/LundaNorte.jpg",
        descricao: "Lunda Norte"
      },
      {
        img: "/img/provincias/LundaSul.jpeg",
        descricao: "Lunda Sul"
      },
      {
        img: "/img/provincias/Bengo.jpeg",
        descricao: "Bengo"
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Selecao pa-10" }, _attrs))} data-v-33652628><h1 class="text-center text-green" data-v-33652628>Escolha a provincia em que deseja vender o seu produto</h1><h2 class="text-center text-grey" data-v-33652628>Organizamos as provincias diacordo ao local onde o seu produto é mais valorizado</h2><div class="avo" data-v-33652628><div class="pai" data-v-33652628><!--[-->`);
  ssrRenderList(_ctx.produtos, (produto, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/vendas/empresas",
      class: "filho rounded-xl",
      key: index,
      style: $options.verImg(produto.img)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="sombra rounded-xl d-flex justify-center align-center" data-v-33652628${_scopeId}><h2 class="text-center text-white" data-v-33652628${_scopeId}>${ssrInterpolate(produto.descricao)}</h2></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vendas/provincias.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const provincias = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-33652628"]]);
export {
  provincias as default
};
//# sourceMappingURL=provincias-9b4c32cc.js.map
