import { _ as __nuxt_component_0$1 } from "./nuxt-link-06d83316.js";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_1 } from "../server.mjs";
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
const SideMenu_vue_vue_type_style_index_0_scoped_db98b42a_lang = "";
const _sfc_main$1 = {
  data: () => ({
    menu: [
      {
        icon: "dash",
        descricao: "Dashboard",
        to: "/"
      },
      {
        icon: "dash",
        descricao: "Perfil",
        to: "/perfil"
      },
      {
        icon: "dash",
        descricao: "Plantação",
        to: "/plantacao"
      },
      {
        icon: "dash",
        descricao: "Produtos",
        to: "/produtos"
      },
      {
        icon: "dash",
        descricao: "Contabilidade",
        to: "/contabilidade"
      },
      {
        icon: "dash",
        descricao: "Venda",
        to: "/contabilidade"
      },
      {
        icon: "dash",
        descricao: "Relatorios",
        to: "/relatorio"
      }
    ]
  })
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_v_icon = resolveComponent("v-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sideBar bg-green-lighten-1" }, _attrs))} data-v-db98b42a><h1 class="text-center" data-v-db98b42a>SIA</h1><div class="hrDiv" data-v-db98b42a></div><div class="paiUlDiv d-flex justify-center" data-v-db98b42a><div class="ulDiv" data-v-db98b42a><!--[-->`);
  ssrRenderList(_ctx.menu, (m, index) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "liDiv",
      key: index,
      to: m.to
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="iconDiv" data-v-db98b42a${_scopeId}>`);
          _push2(ssrRenderComponent(_component_v_icon, {
            size: "large",
            color: "green-darken-2",
            icon: "mdi-domain"
          }, null, _parent2, _scopeId));
          _push2(`</div><div class="infoDiv" data-v-db98b42a${_scopeId}><p data-v-db98b42a${_scopeId}>${ssrInterpolate(m.descricao)}</p></div>`);
        } else {
          return [
            createVNode("div", { class: "iconDiv" }, [
              createVNode(_component_v_icon, {
                size: "large",
                color: "green-darken-2",
                icon: "mdi-domain"
              })
            ]),
            createVNode("div", { class: "infoDiv" }, [
              createVNode("p", null, toDisplayString(m.descricao), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-db98b42a"]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SideMenu = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "overflow": "hidden" } }, _attrs))}><div class="principal d-flex"><div class="PSide">`);
  _push(ssrRenderComponent(_component_SideMenu, null, null, _parent));
  _push(`</div><div class="PContainer">`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-fa694a9a.js.map
