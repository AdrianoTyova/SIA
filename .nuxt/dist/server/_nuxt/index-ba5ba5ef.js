import { _ as __nuxt_component_0$1 } from "./nuxt-link-06d83316.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper";
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
const SementeDetail_vue_vue_type_style_index_0_scoped_bd9c984b_lang = "";
const _sfc_main$2 = {
  props: {
    produto: Object
  },
  data: () => ({
    dialog: false,
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
      }
    ]
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.produto.img})`;
    },
    comprar() {
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "800"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, {
                variant: "",
                class: "text-white"
              }), {
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
                createVNode(_component_v_btn, mergeProps(props, {
                  variant: "",
                  class: "text-white"
                }), {
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
                    _push4(ssrRenderComponent(_component_v_card_text, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_container, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="d-flex justify-space-between" data-v-bd9c984b${_scopeId5}><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-bd9c984b${_scopeId5}></div><div class="legendaProdutoModal" data-v-bd9c984b${_scopeId5}><div data-v-bd9c984b${_scopeId5}><div class="d-flex justify-space-between align-center pr-4" data-v-bd9c984b${_scopeId5}><h1 class="text-green" data-v-bd9c984b${_scopeId5}>${ssrInterpolate($props.produto.descricao)}</h1><span class="preco" data-v-bd9c984b${_scopeId5}>20.000Kz</span></div><p class="text-grey-darken-2" data-v-bd9c984b${_scopeId5}>Semente de otima qualidade e com resultados surpreendentes</p><p data-v-bd9c984b${_scopeId5}>Empresa: FertiAngol</p><p data-v-bd9c984b${_scopeId5}>Angola - Huila - Humpata - Rua 11 de Novembro</p></div>`);
                                _push6(ssrRenderComponent(_component_v_btn, {
                                  elevation: "4",
                                  rounded: "",
                                  color: "green",
                                  class: "mt-8 mx-auto",
                                  width: "300"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Comprar`);
                                    } else {
                                      return [
                                        createTextVNode("Comprar")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", {
                                      class: "imgProdutoModal",
                                      style: $options.verImg()
                                    }, null, 4),
                                    createVNode("div", { class: "legendaProdutoModal" }, [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "d-flex justify-space-between align-center pr-4" }, [
                                          createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                          createVNode("span", { class: "preco" }, "20.000Kz")
                                        ]),
                                        createVNode("p", { class: "text-grey-darken-2" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                        createVNode("p", null, "Empresa: FertiAngol"),
                                        createVNode("p", null, "Angola - Huila - Humpata - Rua 11 de Novembro")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        elevation: "4",
                                        rounded: "",
                                        color: "green",
                                        class: "mt-8 mx-auto",
                                        width: "300"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Comprar")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_container, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("div", {
                                    class: "imgProdutoModal",
                                    style: $options.verImg()
                                  }, null, 4),
                                  createVNode("div", { class: "legendaProdutoModal" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "d-flex justify-space-between align-center pr-4" }, [
                                        createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                        createVNode("span", { class: "preco" }, "20.000Kz")
                                      ]),
                                      createVNode("p", { class: "text-grey-darken-2" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                      createVNode("p", null, "Empresa: FertiAngol"),
                                      createVNode("p", null, "Angola - Huila - Humpata - Rua 11 de Novembro")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      elevation: "4",
                                      rounded: "",
                                      color: "green",
                                      class: "mt-8 mx-auto",
                                      width: "300"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Comprar")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
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
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("div", {
                                  class: "imgProdutoModal",
                                  style: $options.verImg()
                                }, null, 4),
                                createVNode("div", { class: "legendaProdutoModal" }, [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "d-flex justify-space-between align-center pr-4" }, [
                                      createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                      createVNode("span", { class: "preco" }, "20.000Kz")
                                    ]),
                                    createVNode("p", { class: "text-grey-darken-2" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                    createVNode("p", null, "Empresa: FertiAngol"),
                                    createVNode("p", null, "Angola - Huila - Humpata - Rua 11 de Novembro")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    elevation: "4",
                                    rounded: "",
                                    color: "green",
                                    class: "mt-8 mx-auto",
                                    width: "300"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Comprar")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
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
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between" }, [
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, null, 4),
                              createVNode("div", { class: "legendaProdutoModal" }, [
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex justify-space-between align-center pr-4" }, [
                                    createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                    createVNode("span", { class: "preco" }, "20.000Kz")
                                  ]),
                                  createVNode("p", { class: "text-grey-darken-2" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                  createVNode("p", null, "Empresa: FertiAngol"),
                                  createVNode("p", null, "Angola - Huila - Humpata - Rua 11 de Novembro")
                                ]),
                                createVNode(_component_v_btn, {
                                  elevation: "4",
                                  rounded: "",
                                  color: "green",
                                  class: "mt-8 mx-auto",
                                  width: "300"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Comprar")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
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
            width: "800"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, {
                variant: "",
                class: "text-white"
              }), {
                default: withCtx(() => [
                  createTextVNode(" Detalhes ")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between" }, [
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, null, 4),
                            createVNode("div", { class: "legendaProdutoModal" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex justify-space-between align-center pr-4" }, [
                                  createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                  createVNode("span", { class: "preco" }, "20.000Kz")
                                ]),
                                createVNode("p", { class: "text-grey-darken-2" }, "Semente de otima qualidade e com resultados surpreendentes"),
                                createVNode("p", null, "Empresa: FertiAngol"),
                                createVNode("p", null, "Angola - Huila - Humpata - Rua 11 de Novembro")
                              ]),
                              createVNode(_component_v_btn, {
                                elevation: "4",
                                rounded: "",
                                color: "green",
                                class: "mt-8 mx-auto",
                                width: "300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Comprar")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/SementeDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-bd9c984b"]]);
const swiper_min = "";
const freeMode_min = "";
const pagination_min = "";
const LojaSemente_vue_vue_type_style_index_0_scoped_ce739726_lang = "";
const _sfc_main$1 = {
  props: {
    produto: Object
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [FreeMode, Pagination]
    };
  },
  data: () => ({
    dialog: false,
    produtos: [
      {
        img: "/img/produtos/lata.jpeg",
        descricao: "Semente de Couve"
      },
      {
        img: "/img/produtos/SementeFeijao3.jpeg",
        descricao: "Semente de Feijão"
      },
      {
        img: "/img/produtos/SementeBatata5.jpeg",
        descricao: "Semente de Batata"
      },
      {
        img: "/img/produtos/LataTomate2.jpeg",
        descricao: "Semente de Tomate"
      },
      {
        img: "/img/produtos/SementeTomate5.jpeg",
        descricao: "Semente de Tomate"
      },
      {
        img: "/img/produtos/SementeTomate6.jpeg",
        descricao: "Semente de Tomate"
      }
    ]
  }),
  methods: {
    verImg() {
      return `background-image: url(${this.produto.img})`;
    },
    verImg2(img) {
      return `background-image: url(${img})`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_container = resolveComponent("v-container");
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_ModalSementeDetail = __nuxt_component_0;
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          width: "940"
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Selecionar `);
                  } else {
                    return [
                      createTextVNode(" Selecionar ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                  default: withCtx(() => [
                    createTextVNode(" Selecionar ")
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
                    _push4(ssrRenderComponent(_component_v_card_text, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_container, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="ImgFundo d-flex justify-space-between" data-v-ce739726${_scopeId5}><div class="imgProdutoModal" style="${ssrRenderStyle($options.verImg())}" data-v-ce739726${_scopeId5}></div><div class="legendaProdutoModal" data-v-ce739726${_scopeId5}><h1 class="text-green" data-v-ce739726${_scopeId5}>${ssrInterpolate($props.produto.descricao)}</h1><p class="text-grey-darken-2" data-v-ce739726${_scopeId5}>Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio</p></div></div><div class="recomendados" data-v-ce739726${_scopeId5}><h1 class="text-green text-center" data-v-ce739726${_scopeId5}>Semententes</h1><div class="produtosAvo d-flex justify-center align-center" data-v-ce739726${_scopeId5}><div class="produtosPai" data-v-ce739726${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_Swiper, {
                                  class: "divSwiper ma-auto",
                                  "slides-per-view": 3,
                                  modules: $setup.modules,
                                  "space-between": 10,
                                  onSwiper: $setup.onSwiper,
                                  onSlideChange: $setup.onSlideChange,
                                  freeMode: true,
                                  pagination: { clickable: true }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList(_ctx.produtos, (produt, index2) => {
                                        _push7(ssrRenderComponent(_component_SwiperSlide, { key: index2 }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<div class="produtosFilho" data-v-ce739726${_scopeId7}><div class="produtosImg d-flex justify-space-between flex-column" style="${ssrRenderStyle($options.verImg2(produt.img))}" data-v-ce739726${_scopeId7}><div class="sombra" data-v-ce739726${_scopeId7}></div><div class="produtoslegenda" data-v-ce739726${_scopeId7}>`);
                                              _push8(ssrRenderComponent(_component_ModalSementeDetail, { produto: produt }, null, _parent8, _scopeId7));
                                              _push8(`</div></div></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "produtosFilho" }, [
                                                  createVNode("div", {
                                                    class: "produtosImg d-flex justify-space-between flex-column",
                                                    style: $options.verImg2(produt.img)
                                                  }, [
                                                    createVNode("div", { class: "sombra" }),
                                                    createVNode("div", { class: "produtoslegenda" }, [
                                                      createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                    ])
                                                  ], 4)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                          return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "produtosFilho" }, [
                                                createVNode("div", {
                                                  class: "produtosImg d-flex justify-space-between flex-column",
                                                  style: $options.verImg2(produt.img)
                                                }, [
                                                  createVNode("div", { class: "sombra" }),
                                                  createVNode("div", { class: "produtoslegenda" }, [
                                                    createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                  ])
                                                ], 4)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "ImgFundo d-flex justify-space-between" }, [
                                    createVNode("div", {
                                      class: "imgProdutoModal",
                                      style: $options.verImg()
                                    }, null, 4),
                                    createVNode("div", { class: "legendaProdutoModal" }, [
                                      createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                      createVNode("p", { class: "text-grey-darken-2" }, "Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio")
                                    ])
                                  ]),
                                  createVNode("div", { class: "recomendados" }, [
                                    createVNode("h1", { class: "text-green text-center" }, "Semententes"),
                                    createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                      createVNode("div", { class: "produtosPai" }, [
                                        createVNode(_component_Swiper, {
                                          class: "divSwiper ma-auto",
                                          "slides-per-view": 3,
                                          modules: $setup.modules,
                                          "space-between": 10,
                                          onSwiper: $setup.onSwiper,
                                          onSlideChange: $setup.onSlideChange,
                                          freeMode: true,
                                          pagination: { clickable: true }
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                              return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "produtosFilho" }, [
                                                    createVNode("div", {
                                                      class: "produtosImg d-flex justify-space-between flex-column",
                                                      style: $options.verImg2(produt.img)
                                                    }, [
                                                      createVNode("div", { class: "sombra" }),
                                                      createVNode("div", { class: "produtoslegenda" }, [
                                                        createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                      ])
                                                    ], 4)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modules", "onSwiper", "onSlideChange"])
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_container, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "ImgFundo d-flex justify-space-between" }, [
                                  createVNode("div", {
                                    class: "imgProdutoModal",
                                    style: $options.verImg()
                                  }, null, 4),
                                  createVNode("div", { class: "legendaProdutoModal" }, [
                                    createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                    createVNode("p", { class: "text-grey-darken-2" }, "Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio")
                                  ])
                                ]),
                                createVNode("div", { class: "recomendados" }, [
                                  createVNode("h1", { class: "text-green text-center" }, "Semententes"),
                                  createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                    createVNode("div", { class: "produtosPai" }, [
                                      createVNode(_component_Swiper, {
                                        class: "divSwiper ma-auto",
                                        "slides-per-view": 3,
                                        modules: $setup.modules,
                                        "space-between": 10,
                                        onSwiper: $setup.onSwiper,
                                        onSlideChange: $setup.onSlideChange,
                                        freeMode: true,
                                        pagination: { clickable: true }
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                            return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "produtosFilho" }, [
                                                  createVNode("div", {
                                                    class: "produtosImg d-flex justify-space-between flex-column",
                                                    style: $options.verImg2(produt.img)
                                                  }, [
                                                    createVNode("div", { class: "sombra" }),
                                                    createVNode("div", { class: "produtoslegenda" }, [
                                                      createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                    ])
                                                  ], 4)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modules", "onSwiper", "onSlideChange"])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
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
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "ImgFundo d-flex justify-space-between" }, [
                                createVNode("div", {
                                  class: "imgProdutoModal",
                                  style: $options.verImg()
                                }, null, 4),
                                createVNode("div", { class: "legendaProdutoModal" }, [
                                  createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                  createVNode("p", { class: "text-grey-darken-2" }, "Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio")
                                ])
                              ]),
                              createVNode("div", { class: "recomendados" }, [
                                createVNode("h1", { class: "text-green text-center" }, "Semententes"),
                                createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                  createVNode("div", { class: "produtosPai" }, [
                                    createVNode(_component_Swiper, {
                                      class: "divSwiper ma-auto",
                                      "slides-per-view": 3,
                                      modules: $setup.modules,
                                      "space-between": 10,
                                      onSwiper: $setup.onSwiper,
                                      onSlideChange: $setup.onSlideChange,
                                      freeMode: true,
                                      pagination: { clickable: true }
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                          return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "produtosFilho" }, [
                                                createVNode("div", {
                                                  class: "produtosImg d-flex justify-space-between flex-column",
                                                  style: $options.verImg2(produt.img)
                                                }, [
                                                  createVNode("div", { class: "sombra" }),
                                                  createVNode("div", { class: "produtoslegenda" }, [
                                                    createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                  ])
                                                ], 4)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modules", "onSwiper", "onSlideChange"])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
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
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "ImgFundo d-flex justify-space-between" }, [
                              createVNode("div", {
                                class: "imgProdutoModal",
                                style: $options.verImg()
                              }, null, 4),
                              createVNode("div", { class: "legendaProdutoModal" }, [
                                createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                                createVNode("p", { class: "text-grey-darken-2" }, "Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio")
                              ])
                            ]),
                            createVNode("div", { class: "recomendados" }, [
                              createVNode("h1", { class: "text-green text-center" }, "Semententes"),
                              createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                                createVNode("div", { class: "produtosPai" }, [
                                  createVNode(_component_Swiper, {
                                    class: "divSwiper ma-auto",
                                    "slides-per-view": 3,
                                    modules: $setup.modules,
                                    "space-between": 10,
                                    onSwiper: $setup.onSwiper,
                                    onSlideChange: $setup.onSlideChange,
                                    freeMode: true,
                                    pagination: { clickable: true }
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                        return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "produtosFilho" }, [
                                              createVNode("div", {
                                                class: "produtosImg d-flex justify-space-between flex-column",
                                                style: $options.verImg2(produt.img)
                                              }, [
                                                createVNode("div", { class: "sombra" }),
                                                createVNode("div", { class: "produtoslegenda" }, [
                                                  createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                                ])
                                              ], 4)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modules", "onSwiper", "onSlideChange"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
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
            width: "940"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps({ color: "green" }, props, { class: "mt-3" }), {
                default: withCtx(() => [
                  createTextVNode(" Selecionar ")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "ImgFundo d-flex justify-space-between" }, [
                            createVNode("div", {
                              class: "imgProdutoModal",
                              style: $options.verImg()
                            }, null, 4),
                            createVNode("div", { class: "legendaProdutoModal" }, [
                              createVNode("h1", { class: "text-green" }, toDisplayString($props.produto.descricao), 1),
                              createVNode("p", { class: "text-grey-darken-2" }, "Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio")
                            ])
                          ]),
                          createVNode("div", { class: "recomendados" }, [
                            createVNode("h1", { class: "text-green text-center" }, "Semententes"),
                            createVNode("div", { class: "produtosAvo d-flex justify-center align-center" }, [
                              createVNode("div", { class: "produtosPai" }, [
                                createVNode(_component_Swiper, {
                                  class: "divSwiper ma-auto",
                                  "slides-per-view": 3,
                                  modules: $setup.modules,
                                  "space-between": 10,
                                  onSwiper: $setup.onSwiper,
                                  onSlideChange: $setup.onSlideChange,
                                  freeMode: true,
                                  pagination: { clickable: true }
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.produtos, (produt, index2) => {
                                      return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "produtosFilho" }, [
                                            createVNode("div", {
                                              class: "produtosImg d-flex justify-space-between flex-column",
                                              style: $options.verImg2(produt.img)
                                            }, [
                                              createVNode("div", { class: "sombra" }),
                                              createVNode("div", { class: "produtoslegenda" }, [
                                                createVNode(_component_ModalSementeDetail, { produto: produt }, null, 8, ["produto"])
                                              ])
                                            ], 4)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modules", "onSwiper", "onSlideChange"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/LojaSemente.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ce739726"]]);
const index_vue_vue_type_style_index_0_scoped_6a64aaec_lang = "";
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
      },
      {
        img: "/img/produtos/couve.jpeg",
        descricao: "Couve"
      },
      {
        img: "/img/produtos/Repolho.jpeg",
        descricao: "Repolho"
      },
      {
        img: "/img/produtos/SementeBatata4.jpeg",
        descricao: "Batata"
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
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_v_btn = resolveComponent("v-btn");
  const _component_ModalLojaSemente = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "plantacao" }, _attrs))} data-v-6a64aaec><div class="divCimaPai" data-v-6a64aaec><div class="img" data-v-6a64aaec></div><div class="dados" data-v-6a64aaec><div class="Dados1" data-v-6a64aaec><div class="d-flex justify-space-between align-center" data-v-6a64aaec><div data-v-6a64aaec><h1 data-v-6a64aaec>Hoje Quarta-feira</h1><p class="text-white" data-v-6a64aaec>Humpata - 17ºC</p></div><div data-v-6a64aaec>ol</div></div></div><div class="Dados2" data-v-6a64aaec><div class="d-flex justify-center flex-column text-center" data-v-6a64aaec><h2 data-v-6a64aaec>25 <span data-v-6a64aaec>ºC</span></h2><h3 data-v-6a64aaec>Temperatura</h3><p data-v-6a64aaec>Média semanal</p></div></div><div class="Dados3" data-v-6a64aaec><div class="d-flex justify-center flex-column text-center" data-v-6a64aaec><h2 data-v-6a64aaec>20</h2><h3 data-v-6a64aaec>Hectares</h3><p data-v-6a64aaec>para cultivo</p></div></div><div class="Dados4" data-v-6a64aaec><div class="d-flex justify-center flex-column text-center" data-v-6a64aaec><h2 data-v-6a64aaec>16</h2><h3 data-v-6a64aaec>Trabalhadores</h3><p data-v-6a64aaec>Ativos</p></div></div><div class="Dados5" data-v-6a64aaec><div class="d-flex justify-center flex-column text-center" data-v-6a64aaec><h2 data-v-6a64aaec>5</h2><h3 data-v-6a64aaec>Produtos</h3><p data-v-6a64aaec>Em plantação</p></div></div></div></div><div class="recomendados" data-v-6a64aaec><div class="d-flex justify-space-around align-center" data-v-6a64aaec><h1 class="text-green" data-v-6a64aaec>Produtos Recomendados</h1>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/plantacao/selecao" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          small: "",
          elevation: "3",
          color: "green"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Iniciar Plantação`);
            } else {
              return [
                createTextVNode("Iniciar Plantação")
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
              createTextVNode("Iniciar Plantação")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="produtosAvo d-flex justify-center align-center" data-v-6a64aaec><div class="produtosPai pt-8" data-v-6a64aaec><!--[-->`);
  ssrRenderList(_ctx.produtos, (produto, index2) => {
    _push(`<div class="produtosFilho" data-v-6a64aaec><div class="produtosImg" style="${ssrRenderStyle($options.verImg(produto.img))}" data-v-6a64aaec></div><div class="produtoslegenda" data-v-6a64aaec><div class="DivHr" data-v-6a64aaec></div><h2 class="text-green text-center" data-v-6a64aaec>${ssrInterpolate(produto.descricao)}</h2>`);
    _push(ssrRenderComponent(_component_ModalLojaSemente, { produto }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plantacao/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6a64aaec"]]);
export {
  index as default
};
//# sourceMappingURL=index-ba5ba5ef.js.map
