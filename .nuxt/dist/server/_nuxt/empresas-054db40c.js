import Swal from "sweetalert2";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, openBlock, createBlock, Fragment, renderList, withDirectives, vShow } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
const TransportePay_vue_vue_type_style_index_0_scoped_99c1aba1_lang = "";
const _sfc_main$7 = {
  props: {
    transporte: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.transporte.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "900"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Solicitar Transporte`);
                  } else {
                    return [
                      createTextVNode("Solicitar Transporte")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, {
                  elevation: "4",
                  rounded: "",
                  color: "green",
                  class: "mt-8 mx-auto",
                  width: "300"
                }), {
                  default: withCtx(() => [
                    createTextVNode("Solicitar Transporte")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-99c1aba1${_scopeId4}><div class="pImg" data-v-99c1aba1${_scopeId4}><div class="imgOrigem" data-v-99c1aba1${_scopeId4}><div class="sombraI" data-v-99c1aba1${_scopeId4}><h1 data-v-99c1aba1${_scopeId4}>Huíla</h1></div></div><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-99c1aba1${_scopeId4}><div class="sombraI" data-v-99c1aba1${_scopeId4}><h1 data-v-99c1aba1${_scopeId4}>Carrinha</h1></div></div><div class="imgDestino" data-v-99c1aba1${_scopeId4}><div class="sombraI" data-v-99c1aba1${_scopeId4}><h1 data-v-99c1aba1${_scopeId4}>Luanda</h1></div></div></div><div class="legendaProdutoModal pa-5" data-v-99c1aba1${_scopeId4}><div data-v-99c1aba1${_scopeId4}><h1 class="text-green text-center" data-v-99c1aba1${_scopeId4}>Cebola - Carrinha - FertAngol ${ssrInterpolate($props.transporte.descricao)}</h1><p class="text-grey-darken-2 text-center" data-v-99c1aba1${_scopeId4}>Venda 5.000.000Kz - 2Toneladas de cebola</p><p class="text-grey-darken-2 text-center" data-v-99c1aba1${_scopeId4}>Transporte 100.000Kz</p></div>`);
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "green",
                            width: "400",
                            rounded: "",
                            class: "mx-auto mt-8"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Pagar Transporte`);
                              } else {
                                return [
                                  createTextVNode("Pagar Transporte")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", { class: "pImg" }, [
                                createVNode("div", { class: "imgOrigem" }, [
                                  createVNode("div", { class: "sombraI" }, [
                                    createVNode("h1", null, "Huíla")
                                  ])
                                ]),
                                createVNode("div", {
                                  class: "imgProdutoModal",
                                  style: $options.verImg()
                                }, [
                                  createVNode("div", { class: "sombraI" }, [
                                    createVNode("h1", null, "Carrinha")
                                  ])
                                ], 4),
                                createVNode("div", { class: "imgDestino" }, [
                                  createVNode("div", { class: "sombraI" }, [
                                    createVNode("h1", null, "Luanda")
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("h1", { class: "text-green text-center" }, "Cebola - Carrinha - FertAngol " + toDisplayString($props.transporte.descricao), 1),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Venda 5.000.000Kz - 2Toneladas de cebola"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Transporte 100.000Kz")
                                ]),
                                createVNode(_component_v_btn, {
                                  color: "green",
                                  width: "400",
                                  rounded: "",
                                  class: "mx-auto mt-8"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Pagar Transporte")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", { class: "pImg" }, [
                              createVNode("div", { class: "imgOrigem" }, [
                                createVNode("div", { class: "sombraI" }, [
                                  createVNode("h1", null, "Huíla")
                                ])
                              ]),
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, [
                                createVNode("div", { class: "sombraI" }, [
                                  createVNode("h1", null, "Carrinha")
                                ])
                              ], 4),
                              createVNode("div", { class: "imgDestino" }, [
                                createVNode("div", { class: "sombraI" }, [
                                  createVNode("h1", null, "Luanda")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-green text-center" }, "Cebola - Carrinha - FertAngol " + toDisplayString($props.transporte.descricao), 1),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Venda 5.000.000Kz - 2Toneladas de cebola"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Transporte 100.000Kz")
                              ]),
                              createVNode(_component_v_btn, {
                                color: "green",
                                width: "400",
                                rounded: "",
                                class: "mx-auto mt-8"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Pagar Transporte")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", { class: "pImg" }, [
                            createVNode("div", { class: "imgOrigem" }, [
                              createVNode("div", { class: "sombraI" }, [
                                createVNode("h1", null, "Huíla")
                              ])
                            ]),
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, [
                              createVNode("div", { class: "sombraI" }, [
                                createVNode("h1", null, "Carrinha")
                              ])
                            ], 4),
                            createVNode("div", { class: "imgDestino" }, [
                              createVNode("div", { class: "sombraI" }, [
                                createVNode("h1", null, "Luanda")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-green text-center" }, "Cebola - Carrinha - FertAngol " + toDisplayString($props.transporte.descricao), 1),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Venda 5.000.000Kz - 2Toneladas de cebola"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Transporte 100.000Kz")
                            ]),
                            createVNode(_component_v_btn, {
                              color: "green",
                              width: "400",
                              rounded: "",
                              class: "mx-auto mt-8"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Pagar Transporte")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "900"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx(() => [
                  createTextVNode("Solicitar Transporte")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", { class: "pImg" }, [
                          createVNode("div", { class: "imgOrigem" }, [
                            createVNode("div", { class: "sombraI" }, [
                              createVNode("h1", null, "Huíla")
                            ])
                          ]),
                          createVNode("div", {
                            class: "imgProdutoModal",
                            style: $options.verImg()
                          }, [
                            createVNode("div", { class: "sombraI" }, [
                              createVNode("h1", null, "Carrinha")
                            ])
                          ], 4),
                          createVNode("div", { class: "imgDestino" }, [
                            createVNode("div", { class: "sombraI" }, [
                              createVNode("h1", null, "Luanda")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-green text-center" }, "Cebola - Carrinha - FertAngol " + toDisplayString($props.transporte.descricao), 1),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Venda 5.000.000Kz - 2Toneladas de cebola"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Transporte 100.000Kz")
                          ]),
                          createVNode(_component_v_btn, {
                            color: "green",
                            width: "400",
                            rounded: "",
                            class: "mx-auto mt-8"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Pagar Transporte")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/TransportePay.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-99c1aba1"]]);
const TransporteDetail_vue_vue_type_style_index_0_scoped_3f74b691_lang = "";
const _sfc_main$6 = {
  props: {
    transporte: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.transporte.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalTransportePay = __nuxt_component_0$5;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "500"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Detalhes `);
                  } else {
                    return [
                      createTextVNode(" Detalhes ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                  default: withCtx(() => [
                    createTextVNode(" Detalhes ")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-3f74b691${_scopeId4}><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-3f74b691${_scopeId4}></div><div class="legendaProdutoModal pa-5" data-v-3f74b691${_scopeId4}><div data-v-3f74b691${_scopeId4}><h1 class="text-green text-center" data-v-3f74b691${_scopeId4}>${ssrInterpolate($props.transporte.descricao)}</h1><p class="text-center" data-v-3f74b691${_scopeId4}>Angola - Huila - Humpata - Rua 11 de Novembro</p><p class="text-grey-darken-2 text-center" data-v-3f74b691${_scopeId4}>Semente de otima qualidade e com resultados surpreendentes</p><p class="text-grey-darken-2 text-center" data-v-3f74b691${_scopeId4}>Preço da Cebola: 20.000Kz - 100Kg</p></div>`);
                          _push5(ssrRenderComponent(_component_ModalTransportePay, { transporte: $props.transporte }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, null, 4),
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.transporte.descricao), 1),
                                  createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                                ]),
                                createVNode(_component_ModalTransportePay, { transporte: $props.transporte }, null, 8, ["transporte"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, null, 4),
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.transporte.descricao), 1),
                                createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                              ]),
                              createVNode(_component_ModalTransportePay, { transporte: $props.transporte }, null, 8, ["transporte"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", {
                            class: "imgProdutoModal",
                            style: $options.verImg()
                          }, null, 4),
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.transporte.descricao), 1),
                              createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                            ]),
                            createVNode(_component_ModalTransportePay, { transporte: $props.transporte }, null, 8, ["transporte"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "500"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx(() => [
                  createTextVNode(" Detalhes ")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", {
                          class: "imgProdutoModal",
                          style: $options.verImg()
                        }, null, 4),
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.transporte.descricao), 1),
                            createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                          ]),
                          createVNode(_component_ModalTransportePay, { transporte: $props.transporte }, null, 8, ["transporte"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/TransporteDetail.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-3f74b691"]]);
const Transportes_vue_vue_type_style_index_0_scoped_00893f79_lang = "";
const _sfc_main$5 = {
  data: () => ({
    dialog: false,
    produtos: [
      {
        img: "/img/carros/fuso.jpg",
        descricao: "Fuso"
      },
      {
        img: "/img/carros/izuzu.jpeg",
        descricao: "Izuzu"
      },
      {
        img: "/img/carros/iz.jpeg",
        descricao: "Izuzu"
      },
      {
        img: "/img/carros/hilux.jpeg",
        descricao: "Hilux"
      },
      {
        img: "/img/carros/m.jpeg",
        descricao: "Mitsubishi"
      },
      {
        img: "/img/carros/l200.jpeg",
        descricao: "L 200"
      },
      {
        img: "/img/carros/mit.jpeg",
        descricao: "Carrinha"
      },
      {
        img: "/img/carros/carro.png",
        descricao: "Carrinha"
      }
    ]
  }),
  methods: {
    verImg(img) {
      return `background-image: url(${img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalTransporteDetail = __nuxt_component_0$4;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "1200"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto"
              }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Solicitar Transporte`);
                  } else {
                    return [
                      createTextVNode("Solicitar Transporte")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, {
                  elevation: "4",
                  rounded: "",
                  color: "green",
                  class: "mt-8 mx-auto"
                }), {
                  default: withCtx(() => [
                    createTextVNode("Solicitar Transporte")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "bg-green pa-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-white text-center" data-v-00893f79${_scopeId4}>Escolha o seu transporte</h1>`);
                        } else {
                          return [
                            createVNode("h1", { class: "text-white text-center" }, "Escolha o seu transporte")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-00893f79${_scopeId4}><div class="legendaProdutoModal pa-5" data-v-00893f79${_scopeId4}><div data-v-00893f79${_scopeId4}><p class="text-center" data-v-00893f79${_scopeId4}>Esta é a lista de transporte ideal para a sua mercadoria</p></div><div class="produtosAvo d-flex justify-center align-center" data-v-00893f79${_scopeId4}><div class="produtosPai pt-8" data-v-00893f79${_scopeId4}><!--[-->`);
                          ssrRenderList(_ctx.produtos, (produto, index) => {
                            _push5(`<div class="produtosFilho" data-v-00893f79${_scopeId4}><div class="produtosImg" style="${ssrRenderStyle($options.verImg(produto.img))}" data-v-00893f79${_scopeId4}></div><div class="produtoslegenda" data-v-00893f79${_scopeId4}><div class="DivHr" data-v-00893f79${_scopeId4}></div><h2 class="text-green text-center" data-v-00893f79${_scopeId4}>${ssrInterpolate(produto.descricao)}</h2>`);
                            _push5(ssrRenderComponent(_component_ModalTransporteDetail, { transporte: produto }, null, _parent5, _scopeId4));
                            _push5(`</div></div>`);
                          });
                          _push5(`<!--]--></div></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-center" }, "Esta é a lista de transporte ideal para a sua mercadoria")
                                ]),
                                createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                  createVNode("div", { class: "produtosPai pt-8" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produto, index) => {
                                      return openBlock(), createBlock("div", {
                                        class: "produtosFilho",
                                        key: index
                                      }, [
                                        createVNode("div", {
                                          class: "produtosImg",
                                          style: $options.verImg(produto.img)
                                        }, null, 4),
                                        createVNode("div", { class: "produtoslegenda" }, [
                                          createVNode("div", { class: "DivHr" }),
                                          createVNode("h2", { class: "text-green text-center" }, toDisplayString(produto.descricao), 1),
                                          createVNode(_component_ModalTransporteDetail, { transporte: produto }, null, 8, ["transporte"])
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "text-white text-center" }, "Escolha o seu transporte")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("p", { class: "text-center" }, "Esta é a lista de transporte ideal para a sua mercadoria")
                              ]),
                              createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                createVNode("div", { class: "produtosPai pt-8" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produto, index) => {
                                    return openBlock(), createBlock("div", {
                                      class: "produtosFilho",
                                      key: index
                                    }, [
                                      createVNode("div", {
                                        class: "produtosImg",
                                        style: $options.verImg(produto.img)
                                      }, null, 4),
                                      createVNode("div", { class: "produtoslegenda" }, [
                                        createVNode("div", { class: "DivHr" }),
                                        createVNode("h2", { class: "text-green text-center" }, toDisplayString(produto.descricao), 1),
                                        createVNode(_component_ModalTransporteDetail, { transporte: produto }, null, 8, ["transporte"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-white text-center" }, "Escolha o seu transporte")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-center" }, "Esta é a lista de transporte ideal para a sua mercadoria")
                            ]),
                            createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                              createVNode("div", { class: "produtosPai pt-8" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produto, index) => {
                                  return openBlock(), createBlock("div", {
                                    class: "produtosFilho",
                                    key: index
                                  }, [
                                    createVNode("div", {
                                      class: "produtosImg",
                                      style: $options.verImg(produto.img)
                                    }, null, 4),
                                    createVNode("div", { class: "produtoslegenda" }, [
                                      createVNode("div", { class: "DivHr" }),
                                      createVNode("h2", { class: "text-green text-center" }, toDisplayString(produto.descricao), 1),
                                      createVNode(_component_ModalTransporteDetail, { transporte: produto }, null, 8, ["transporte"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "1200"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto"
              }), {
                default: withCtx(() => [
                  createTextVNode("Solicitar Transporte")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-white text-center" }, "Escolha o seu transporte")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-center" }, "Esta é a lista de transporte ideal para a sua mercadoria")
                          ]),
                          createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                            createVNode("div", { class: "produtosPai pt-8" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produto, index) => {
                                return openBlock(), createBlock("div", {
                                  class: "produtosFilho",
                                  key: index
                                }, [
                                  createVNode("div", {
                                    class: "produtosImg",
                                    style: $options.verImg(produto.img)
                                  }, null, 4),
                                  createVNode("div", { class: "produtoslegenda" }, [
                                    createVNode("div", { class: "DivHr" }),
                                    createVNode("h2", { class: "text-green text-center" }, toDisplayString(produto.descricao), 1),
                                    createVNode(_component_ModalTransporteDetail, { transporte: produto }, null, 8, ["transporte"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/Transportes.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-00893f79"]]);
const Pagamentos_vue_vue_type_style_index_0_scoped_6492006e_lang = "";
const _sfc_main$4 = {
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.empresa.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalSolicitarTransporte = __nuxt_component_0$2;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "900"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-2 mx-auto"
              }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sem transporte`);
                  } else {
                    return [
                      createTextVNode("Sem transporte")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, {
                  elevation: "4",
                  rounded: "",
                  color: "green",
                  class: "mt-2 mx-auto"
                }), {
                  default: withCtx(() => [
                    createTextVNode("Sem transporte")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-6492006e${_scopeId4}><div class="imgProdutoModal" data-v-6492006e${_scopeId4}></div><div class="legendaProdutoModal pa-5" data-v-6492006e${_scopeId4}><div data-v-6492006e${_scopeId4}><h1 class="text-green text-center" data-v-6492006e${_scopeId4}>Venda de cebola para a empresa</h1><p class="text-center" data-v-6492006e${_scopeId4}>De Huíla para Luanda</p><p class="text-grey-darken-2 text-center" data-v-6492006e${_scopeId4}>Preço da Cebola: 20.000Kz - 20Kg</p><p class="text-grey-darken-2 text-center" data-v-6492006e${_scopeId4}>Qtd: - 1 + </p><p class="text-grey-darken-2 text-center" data-v-6492006e${_scopeId4}>Total a vender: 150.000Kz - 500Kg </p></div>`);
                          _push5(ssrRenderComponent(_component_ModalSolicitarTransporte, null, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", { class: "imgProdutoModal" }),
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa"),
                                  createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                                ]),
                                createVNode(_component_ModalSolicitarTransporte)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", { class: "imgProdutoModal" }),
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa"),
                                createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                              ]),
                              createVNode(_component_ModalSolicitarTransporte)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", { class: "imgProdutoModal" }),
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa"),
                              createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                            ]),
                            createVNode(_component_ModalSolicitarTransporte)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "900"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-2 mx-auto"
              }), {
                default: withCtx(() => [
                  createTextVNode("Sem transporte")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", { class: "imgProdutoModal" }),
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa"),
                            createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                          ]),
                          createVNode(_component_ModalSolicitarTransporte)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/Pagamentos.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-6492006e"]]);
const SolicitarTransporte_vue_vue_type_style_index_0_scoped_f45c1f30_lang = "";
const _sfc_main$3 = {
  props: {
    empresa: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.empresa.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalTransportes = __nuxt_component_0$3;
  const _component_ModalPagamentos = __nuxt_component_1;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "500"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Seguinte`);
                  } else {
                    return [
                      createTextVNode("Seguinte")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, {
                  elevation: "4",
                  rounded: "",
                  color: "green",
                  class: "mt-8 mx-auto",
                  width: "300"
                }), {
                  default: withCtx(() => [
                    createTextVNode("Seguinte")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_title, { class: "bg-green pa-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-white text-center" data-v-f45c1f30${_scopeId4}>Deseja Transporte?</h1>`);
                        } else {
                          return [
                            createVNode("h1", { class: "text-white text-center" }, "Deseja Transporte?")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-f45c1f30${_scopeId4}><div class="legendaProdutoModal pa-5" data-v-f45c1f30${_scopeId4}><div data-v-f45c1f30${_scopeId4}><p class="text-center" data-v-f45c1f30${_scopeId4}>Pode solicitar um transporte para a sua mercadoria ou continuar para o pagamento</p></div><div class="d-flex align-center justify-center" data-v-f45c1f30${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_ModalTransportes, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ModalPagamentos, { empresa: $props.empresa }, null, _parent5, _scopeId4));
                          _push5(`</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-center" }, "Pode solicitar um transporte para a sua mercadoria ou continuar para o pagamento")
                                ]),
                                createVNode("div", { class: "d-flex align-center justify-center" }, [
                                  createVNode(_component_ModalTransportes),
                                  createVNode(_component_ModalPagamentos, { empresa: $props.empresa }, null, 8, ["empresa"])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "text-white text-center" }, "Deseja Transporte?")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("p", { class: "text-center" }, "Pode solicitar um transporte para a sua mercadoria ou continuar para o pagamento")
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-center" }, [
                                createVNode(_component_ModalTransportes),
                                createVNode(_component_ModalPagamentos, { empresa: $props.empresa }, null, 8, ["empresa"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-white text-center" }, "Deseja Transporte?")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-center" }, "Pode solicitar um transporte para a sua mercadoria ou continuar para o pagamento")
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-center" }, [
                              createVNode(_component_ModalTransportes),
                              createVNode(_component_ModalPagamentos, { empresa: $props.empresa }, null, 8, ["empresa"])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "500"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx(() => [
                  createTextVNode("Seguinte")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "bg-green pa-4" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-white text-center" }, "Deseja Transporte?")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-center" }, "Pode solicitar um transporte para a sua mercadoria ou continuar para o pagamento")
                          ]),
                          createVNode("div", { class: "d-flex align-center justify-center" }, [
                            createVNode(_component_ModalTransportes),
                            createVNode(_component_ModalPagamentos, { empresa: $props.empresa }, null, 8, ["empresa"])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/SolicitarTransporte.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f45c1f30"]]);
const VendaEmpresa_vue_vue_type_style_index_0_scoped_da6f1b2b_lang = "";
const _sfc_main$2 = {
  props: {
    empresa: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.empresa.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalSolicitarTransporte = __nuxt_component_0$2;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "900"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Vender`);
                  } else {
                    return [
                      createTextVNode("Vender")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, {
                  elevation: "4",
                  rounded: "",
                  color: "green",
                  class: "mt-8 mx-auto",
                  width: "300"
                }), {
                  default: withCtx(() => [
                    createTextVNode("Vender")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-da6f1b2b${_scopeId4}><div class="pImg" data-v-da6f1b2b${_scopeId4}><div class="imgProduto" data-v-da6f1b2b${_scopeId4}></div><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-da6f1b2b${_scopeId4}></div></div><div class="legendaProdutoModal pa-5" data-v-da6f1b2b${_scopeId4}><div data-v-da6f1b2b${_scopeId4}><h1 class="text-green text-center" data-v-da6f1b2b${_scopeId4}>Venda de cebola para a empresa ${ssrInterpolate($props.empresa.descricao)}</h1><p class="text-center" data-v-da6f1b2b${_scopeId4}>De Huíla para Luanda</p><p class="text-grey-darken-2 text-center" data-v-da6f1b2b${_scopeId4}>Preço da Cebola: 20.000Kz - 20Kg</p><p class="text-grey-darken-2 text-center" data-v-da6f1b2b${_scopeId4}>Qtd: - 1 + </p><p class="text-grey-darken-2 text-center" data-v-da6f1b2b${_scopeId4}>Total a vender: 150.000Kz - 500Kg </p></div>`);
                          _push5(ssrRenderComponent(_component_ModalSolicitarTransporte, null, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", { class: "pImg" }, [
                                createVNode("div", { class: "imgProduto" }),
                                createVNode("div", {
                                  class: "imgProdutoModal",
                                  style: $options.verImg()
                                }, null, 4)
                              ]),
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa " + toDisplayString($props.empresa.descricao), 1),
                                  createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                                ]),
                                createVNode(_component_ModalSolicitarTransporte)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", { class: "pImg" }, [
                              createVNode("div", { class: "imgProduto" }),
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, null, 4)
                            ]),
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa " + toDisplayString($props.empresa.descricao), 1),
                                createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                              ]),
                              createVNode(_component_ModalSolicitarTransporte)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", { class: "pImg" }, [
                            createVNode("div", { class: "imgProduto" }),
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, null, 4)
                          ]),
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa " + toDisplayString($props.empresa.descricao), 1),
                              createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                            ]),
                            createVNode(_component_ModalSolicitarTransporte)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "900"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                elevation: "4",
                rounded: "",
                color: "green",
                class: "mt-8 mx-auto",
                width: "300"
              }), {
                default: withCtx(() => [
                  createTextVNode("Vender")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", { class: "pImg" }, [
                          createVNode("div", { class: "imgProduto" }),
                          createVNode("div", {
                            class: "imgProdutoModal",
                            style: $options.verImg()
                          }, null, 4)
                        ]),
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-green text-center" }, "Venda de cebola para a empresa " + toDisplayString($props.empresa.descricao), 1),
                            createVNode("p", { class: "text-center" }, "De Huíla para Luanda"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 20Kg"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Qtd: - 1 + "),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Total a vender: 150.000Kz - 500Kg ")
                          ]),
                          createVNode(_component_ModalSolicitarTransporte)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/VendaEmpresa.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-da6f1b2b"]]);
const EmpresaDetail_vue_vue_type_style_index_0_scoped_0d0eed73_lang = "";
const _sfc_main$1 = {
  props: {
    empresa: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.empresa.img})`;
    },
    vender() {
      Swal.fire({
        title: "Deseja Transporte?",
        text: "Vamos enviar um transporte para a sua mercadoria",
        icon: "info"
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_ModalVendaEmpresa = __nuxt_component_0$1;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "500"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Detalhes `);
                  } else {
                    return [
                      createTextVNode(" Detalhes ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                  default: withCtx(() => [
                    createTextVNode(" Detalhes ")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="PaiImg d-flex justify-space-between flex-column pa-0" data-v-0d0eed73${_scopeId4}><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-0d0eed73${_scopeId4}></div><div class="legendaProdutoModal pa-5" data-v-0d0eed73${_scopeId4}><div data-v-0d0eed73${_scopeId4}><h1 class="text-green text-center" data-v-0d0eed73${_scopeId4}>${ssrInterpolate($props.empresa.descricao)}</h1><p class="text-center" data-v-0d0eed73${_scopeId4}>Angola - Huila - Humpata - Rua 11 de Novembro</p><p class="text-grey-darken-2 text-center" data-v-0d0eed73${_scopeId4}>Semente de otima qualidade e com resultados surpreendentes</p><p class="text-grey-darken-2 text-center" data-v-0d0eed73${_scopeId4}>Preço da Cebola: 20.000Kz - 100Kg</p></div>`);
                          _push5(ssrRenderComponent(_component_ModalVendaEmpresa, { empresa: $props.empresa }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, null, 4),
                              createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                                createVNode("div", null, [
                                  createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.empresa.descricao), 1),
                                  createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                  createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                                ]),
                                createVNode(_component_ModalVendaEmpresa, { empresa: $props.empresa }, null, 8, ["empresa"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Fechar `);
                              } else {
                                return [
                                  createTextVNode(" Fechar ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fechar ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_text, { class: "pa-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, null, 4),
                            createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.empresa.descricao), 1),
                                createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                              ]),
                              createVNode(_component_ModalVendaEmpresa, { empresa: $props.empresa }, null, 8, ["empresa"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fechar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "pa-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                          createVNode("div", {
                            class: "imgProdutoModal",
                            style: $options.verImg()
                          }, null, 4),
                          createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.empresa.descricao), 1),
                              createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                              createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                            ]),
                            createVNode(_component_ModalVendaEmpresa, { empresa: $props.empresa }, null, 8, ["empresa"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            width: "500"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx(() => [
                  createTextVNode(" Detalhes ")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, { class: "pa-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "PaiImg d-flex justify-space-between flex-column pa-0" }, [
                        createVNode("div", {
                          class: "imgProdutoModal",
                          style: $options.verImg()
                        }, null, 4),
                        createVNode("div", { class: "legendaProdutoModal pa-5" }, [
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-green text-center" }, toDisplayString($props.empresa.descricao), 1),
                            createVNode("p", { class: "text-center" }, "Angola - Huila - Humpata - Rua 11 de Novembro"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Semente de otima qualidade e com resultados surpreendentes"),
                            createVNode("p", { class: "text-grey-darken-2 text-center" }, "Preço da Cebola: 20.000Kz - 100Kg")
                          ]),
                          createVNode(_component_ModalVendaEmpresa, { empresa: $props.empresa }, null, 8, ["empresa"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: ($event) => _ctx.dialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fechar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/EmpresaDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0d0eed73"]]);
const empresas_vue_vue_type_style_index_0_scoped_5e8b9afb_lang = "";
const _sfc_main = {
  data: () => ({
    show: false,
    empresas: [
      {
        img: "/img/empresas/fetiAngola.png",
        descricao: "FertíAngola",
        show: false
      },
      {
        img: "/img/empresas/carrinho2.jpeg",
        descricao: "Carrinho",
        show: false
      },
      {
        img: "/img/empresas/kero2.jpeg",
        descricao: "Kero",
        show: false
      },
      {
        img: "/img/empresas/agrolider.png",
        descricao: "AgroLider",
        show: false
      },
      {
        img: "/img/empresas/agrotrading.jpeg",
        descricao: "Agrogest",
        show: false
      },
      {
        img: "/img/empresas/hodro.jpeg",
        descricao: "Hidrobem",
        show: false
      },
      {
        img: "/img/empresas/brasa.jpeg",
        descricao: "Brasafrica",
        show: false
      },
      {
        img: "/img/empresas/turi.png",
        descricao: "Turiagro",
        show: false
      },
      {
        img: "/img/provincias/Luanda.jpeg",
        descricao: "AgroLuanda",
        show: false
      }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_ModalEmpresaDetail = __nuxt_component_0;
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_expand_transition = resolveComponent("v-expand-transition");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_card_text = resolveComponent("v-card-text");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5e8b9afb><h1 class="text-center text-green mt-10" data-v-5e8b9afb>Empresas - Luanda - Cebola</h1><div class="avo" data-v-5e8b9afb><div class="pai" data-v-5e8b9afb><!--[-->`);
  ssrRenderList(_ctx.empresas, (empresa, index) => {
    _push(`<div class="filho" data-v-5e8b9afb>`);
    _push(ssrRenderComponent(_component_v_card, {
      class: "mx-auto",
      "max-width": "344",
      elevation: "5"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_v_img, {
            src: empresa.img,
            height: "200px",
            cover: ""
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_card_title, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(empresa.descricao)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(empresa.descricao), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Talatona `);
              } else {
                return [
                  createTextVNode(" Talatona ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_card_actions, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_ModalEmpresaDetail, { empresa }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_btn, {
                  icon: _ctx.show ? "mdi-chevron-up" : "mdi-chevron-down",
                  onClick: ($event) => _ctx.empresas[index].show = !empresa.show
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_ModalEmpresaDetail, { empresa }, null, 8, ["empresa"]),
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_btn, {
                    icon: _ctx.show ? "mdi-chevron-up" : "mdi-chevron-down",
                    onClick: ($event) => _ctx.empresas[index].show = !empresa.show
                  }, null, 8, ["icon", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_expand_transition, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div style="${ssrRenderStyle(empresa.show ? null : { display: "none" })}" data-v-5e8b9afb${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_card_text, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` A cebola valorizou 15% em 3 dias o preço atual de 20Kg é: 30.000kz `);
                    } else {
                      return [
                        createTextVNode(" A cebola valorizou 15% em 3 dias o preço atual de 20Kg é: 30.000kz ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  withDirectives(createVNode("div", null, [
                    createVNode(_component_v_divider),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" A cebola valorizou 15% em 3 dias o preço atual de 20Kg é: 30.000kz ")
                      ]),
                      _: 1
                    })
                  ], 512), [
                    [vShow, empresa.show]
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_v_img, {
              src: empresa.img,
              height: "200px",
              cover: ""
            }, null, 8, ["src"]),
            createVNode(_component_v_card_title, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(empresa.descricao), 1)
              ]),
              _: 2
            }, 1024),
            createVNode(_component_v_card_subtitle, null, {
              default: withCtx(() => [
                createTextVNode(" Talatona ")
              ]),
              _: 1
            }),
            createVNode(_component_v_card_actions, null, {
              default: withCtx(() => [
                createVNode(_component_ModalEmpresaDetail, { empresa }, null, 8, ["empresa"]),
                createVNode(_component_v_spacer),
                createVNode(_component_v_btn, {
                  icon: _ctx.show ? "mdi-chevron-up" : "mdi-chevron-down",
                  onClick: ($event) => _ctx.empresas[index].show = !empresa.show
                }, null, 8, ["icon", "onClick"])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_v_expand_transition, null, {
              default: withCtx(() => [
                withDirectives(createVNode("div", null, [
                  createVNode(_component_v_divider),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" A cebola valorizou 15% em 3 dias o preço atual de 20Kg é: 30.000kz ")
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, empresa.show]
                ])
              ]),
              _: 2
            }, 1024)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vendas/empresas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const empresas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5e8b9afb"]]);
export {
  empresas as default
};
//# sourceMappingURL=empresas-054db40c.js.map
