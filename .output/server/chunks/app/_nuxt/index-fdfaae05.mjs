import { _ as __nuxt_component_0 } from './nuxt-link-06d83316.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  data: () => ({
    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-star",
        titulo: "Materiais",
        descricao: "Os materias necesssarios s\xE3o: enxada, p\xE1, botas de borracha, trator, irrigadores e pulverizadores"
      },
      {
        color: "brown-darken-2",
        icon: "mdi-book-variant",
        titulo: "Feritlidade do Solo",
        descricao: "Eliminando ervas invasoras, corrigindo o pH e adicionando nutrientes necess\xE1rios. Isso ajuda a criar um ambiente favor\xE1vel para o crescimento das plantas."
      },
      {
        color: "blue-darken-3",
        icon: "mdi-airballoon",
        titulo: "Monitoramento da irriga\xE7\xE3o",
        descricao: "As plantas precisam de \xE1gua para crescer, mas irriga\xE7\xE3o em excesso pode levar a problemas como doen\xE7as f\xFAngicas e podrid\xE3o das ra\xEDzes. Monitorar a quantidade de \xE1gua que as plantas recebem e ajustar a irriga\xE7\xE3o conforme necess\xE1rio \xE9 crucial para garantir uma colheita saud\xE1vel. Deve regar este produto 3 vezes por semana uma vez em cada dia"
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
        titulo: "Aduba\xE7\xE3o",
        descricao: "O adubo serve para restaurar e possibilitar o desenvolvimento de micro-organismos ben\xE9ficos, o que aumenta ainda mais a qualidade das condi\xE7\xF5es do solo. Para o seu tipo de solo deves utilizar o adubo Mineral"
      },
      {
        color: "green-lighten-1",
        icon: "mdi-layers-triple",
        titulo: "Fertilizantes",
        descricao: "Uso de fertilizantes naturais: Fertilizantes naturais, como compostagem e esterco, s\xE3o uma \xF3tima op\xE7\xE3o para enriquecer o solo com nutrientes sem o uso de produtos qu\xEDmicos agressivos."
      },
      {
        color: "blue-darken-2",
        icon: "mdi-layers-triple",
        titulo: "Pulveriza\xE7\xE3o",
        descricao: "como rota\xE7\xE3o de culturas e plantio de culturas resistentes, e usar m\xE9todos org\xE2nicos de controle de pragas e doen\xE7as, como o uso de insetos ben\xE9ficos e armadilhas."
      },
      {
        color: "blue-lighten-2",
        icon: "mdi-layers-triple",
        titulo: "Controle de Pragas e doen\xE7as",
        descricao: "inspecionar regularmente as plantas em busca de sinais de doen\xE7as e pragas, como manchas, deforma\xE7\xF5es, mordidas ou outros danos, ajuda a identificar e tratar os problemas rapidamente antes que se tornem mais graves."
      },
      {
        color: "yellow-darken-4",
        icon: "mdi-layers-triple",
        titulo: "Defensivos agricolas",
        descricao: "defensivos agr\xEDcolas, como inseticidas, fungicidas e herbicidas, s\xE3o utilizados para proteger as plantas contra pragas, doen\xE7as e plantas invasoras."
      },
      {
        color: "red-lighten-2",
        icon: "mdi-layers-triple",
        titulo: "Pesticidas Naturais",
        descricao: "Uso de pesticidas naturais: utilizar produtos naturais como \xF3leos essenciais, extratos de plantas e sab\xE3o inseticida pode ajudar a controlar pragas de forma mais segura e sustent\xE1vel do que o uso de pesticidas qu\xEDmicos."
      },
      {
        color: "green-darken-4",
        icon: "mdi-layers-triple",
        titulo: "Colheita",
        descricao: "Verifique a matura\xE7\xE3o: verifique se os produtos est\xE3o maduros o suficiente para a colheita, de acordo com as caracter\xEDsticas de cada planta. A colheita antecipada ou tardia pode afetar a qualidade e o sabor dos produtos."
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
        titulo: "Armazenamento",
        descricao: "Mantenha o produto em local fresco e seco: procure armazenar os produtos em locais com temperatura fresca e constante, sem exposi\xE7\xE3o direta \xE0 luz solar. Evite lugares \xFAmidos ou pr\xF3ximos a fontes de calor."
      },
      {
        color: "grey-darken-2",
        icon: "mdi-layers-triple",
        titulo: "Embalagem",
        descricao: "Este produto deve ser armazenada em embagens de qualidade, pode ser caixa ou em sacos de rede e armazenar em um local apropriado"
      }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_timeline = resolveComponent("v-timeline");
  const _component_v_timeline_item = resolveComponent("v-timeline-item");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex justify-space-around align-center mt-8"><h1 class="text-green">Processo Evolutivo</h1>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/vendas/provincias" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          small: "",
          elevation: "3",
          color: "green"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Vender`);
            } else {
              return [
                createTextVNode("Vender")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            small: "",
            elevation: "3",
            color: "green"
          }, {
            default: withCtx(() => [
              createTextVNode("Vender")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_card, {
    class: "pa-10 ma-10",
    elevation: "0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_timeline, { align: "start" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, i) => {
                _push3(ssrRenderComponent(_component_v_timeline_item, {
                  key: i,
                  "dot-color": item.color,
                  icon: item.icon,
                  "fill-dot": ""
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_card_title, {
                              class: ["text-h6", `bg-${item.color}`]
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(item.titulo)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.titulo), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_v_card_text, { class: "bg-white text--primary pa-5" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<p${_scopeId5}>${ssrInterpolate(item.descricao)}</p>`);
                                  _push6(ssrRenderComponent(_component_v_btn, {
                                    color: item.color,
                                    variant: "outlined",
                                    class: "mt-5"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(` Detalhes `);
                                      } else {
                                        return [
                                          createTextVNode(" Detalhes ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode("p", null, toDisplayString(item.descricao), 1),
                                    createVNode(_component_v_btn, {
                                      color: item.color,
                                      variant: "outlined",
                                      class: "mt-5"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Detalhes ")
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_card_title, {
                                class: ["text-h6", `bg-${item.color}`]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.titulo), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(_component_v_card_text, { class: "bg-white text--primary pa-5" }, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(item.descricao), 1),
                                  createVNode(_component_v_btn, {
                                    color: item.color,
                                    variant: "outlined",
                                    class: "mt-5"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Detalhes ")
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, {
                              class: ["text-h6", `bg-${item.color}`]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.titulo), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode(_component_v_card_text, { class: "bg-white text--primary pa-5" }, {
                              default: withCtx(() => [
                                createVNode("p", null, toDisplayString(item.descricao), 1),
                                createVNode(_component_v_btn, {
                                  color: item.color,
                                  variant: "outlined",
                                  class: "mt-5"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Detalhes ")
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, i) => {
                  return openBlock(), createBlock(_component_v_timeline_item, {
                    key: i,
                    "dot-color": item.color,
                    icon: item.icon,
                    "fill-dot": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, {
                            class: ["text-h6", `bg-${item.color}`]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.titulo), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_v_card_text, { class: "bg-white text--primary pa-5" }, {
                            default: withCtx(() => [
                              createVNode("p", null, toDisplayString(item.descricao), 1),
                              createVNode(_component_v_btn, {
                                color: item.color,
                                variant: "outlined",
                                class: "mt-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Detalhes ")
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["dot-color", "icon"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_timeline, { align: "start" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, i) => {
                return openBlock(), createBlock(_component_v_timeline_item, {
                  key: i,
                  "dot-color": item.color,
                  icon: item.icon,
                  "fill-dot": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, {
                          class: ["text-h6", `bg-${item.color}`]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.titulo), 1)
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(_component_v_card_text, { class: "bg-white text--primary pa-5" }, {
                          default: withCtx(() => [
                            createVNode("p", null, toDisplayString(item.descricao), 1),
                            createVNode(_component_v_btn, {
                              color: item.color,
                              variant: "outlined",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Detalhes ")
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["dot-color", "icon"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/processos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-fdfaae05.mjs.map
