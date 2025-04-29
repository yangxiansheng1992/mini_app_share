
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'OpenHeyTalk': typeof import("../components/OpenHeyTalk/index.vue")['default']
    'ProgressBar': typeof import("../components/ProgressBar/index.vue")['default']
    'VideoPlayer': typeof import("../components/VideoPlayer/index.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'VanActionBarButton': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-button/ActionBarButton")['default']
    'VanActionBarIcon': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-icon/ActionBarIcon")['default']
    'VanActionBar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar/ActionBar")['default']
    'VanActionSheet': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-sheet/ActionSheet")['default']
    'VanAddressEdit': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-edit/AddressEdit")['default']
    'VanBackTop': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/back-top/BackTop")['default']
    'VanArea': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/area/Area")['default']
    'VanBadge': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/badge/Badge")['default']
    'VanBarrage': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/barrage/Barrage")['default']
    'VanButton': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/button/Button")['default']
    'VanCalendar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/calendar/Calendar")['default']
    'VanCascader': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cascader/Cascader")['default']
    'VanCard': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/card/Card")['default']
    'VanCell': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell/Cell")['default']
    'VanCellGroup': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell-group/CellGroup")['default']
    'VanCheckbox': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox/Checkbox")['default']
    'VanCircle': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/circle/Circle")['default']
    'VanCol': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/col/Col")['default']
    'VanCollapse': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse/Collapse")['default']
    'VanAddressList': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-list/AddressList")['default']
    'VanCollapseItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse-item/CollapseItem")['default']
    'VanConfigProvider': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/config-provider/ConfigProvider")['default']
    'VanContactCard': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-card/ContactCard")['default']
    'VanContactEdit': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-edit/ContactEdit")['default']
    'VanContactList': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-list/ContactList")['default']
    'VanCountDown': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/count-down/CountDown")['default']
    'VanCoupon': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon/Coupon")['default']
    'VanCouponCell': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-cell/CouponCell")['default']
    'VanCouponList': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-list/CouponList")['default']
    'VanDialog': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dialog/Dialog")['default']
    'VanDivider': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/divider/Divider")['default']
    'VanDropdownItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-item/DropdownItem")['default']
    'VanDropdownMenu': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-menu/DropdownMenu")['default']
    'VanDatePicker': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/date-picker/DatePicker")['default']
    'VanEmpty': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/empty/Empty")['default']
    'VanFloatingBubble': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-bubble/FloatingBubble")['default']
    'VanCheckboxGroup': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox-group/CheckboxGroup")['default']
    'VanFloatingPanel': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-panel/FloatingPanel")['default']
    'VanForm': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/form/Form")['default']
    'VanGrid': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid/Grid")['default']
    'VanHighlight': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/highlight/Highlight")['default']
    'VanIcon': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/icon/Icon")['default']
    'VanImage': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image/Image")['default']
    'VanImagePreview': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image-preview/ImagePreview")['default']
    'VanIndexBar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-bar/IndexBar")['default']
    'VanIndexAnchor': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-anchor/IndexAnchor")['default']
    'VanList': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/list/List")['default']
    'VanLoading': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/loading/Loading")['default']
    'VanNoticeBar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notice-bar/NoticeBar")['default']
    'VanNavBar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/nav-bar/NavBar")['default']
    'VanNumberKeyboard': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/number-keyboard/NumberKeyboard")['default']
    'VanNotify': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notify/Notify")['default']
    'VanPagination': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pagination/Pagination")['default']
    'VanOverlay': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/overlay/Overlay")['default']
    'VanPicker': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker/Picker")['default']
    'VanPickerGroup': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker-group/PickerGroup")['default']
    'VanPasswordInput': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/password-input/PasswordInput")['default']
    'VanPopup': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popup/Popup")['default']
    'VanProgress': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/progress/Progress")['default']
    'VanPullRefresh': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pull-refresh/PullRefresh")['default']
    'VanPopover': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popover/Popover")['default']
    'VanRadio': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio/Radio")['default']
    'VanRollingText': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rolling-text/RollingText")['default']
    'VanRadioGroup': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio-group/RadioGroup")['default']
    'VanRate': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rate/Rate")['default']
    'VanRow': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/row/Row")['default']
    'VanSearch': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/search/Search")['default']
    'VanShareSheet': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/share-sheet/ShareSheet")['default']
    'VanSidebar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar/Sidebar")['default']
    'VanSidebarItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar-item/SidebarItem")['default']
    'VanField': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/field/Field")['default']
    'VanSignature': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/signature/Signature")['default']
    'VanSkeleton': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton/Skeleton")['default']
    'VanSkeletonAvatar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-avatar/SkeletonAvatar")['default']
    'VanSkeletonImage': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-image/SkeletonImage")['default']
    'VanSkeletonParagraph': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-paragraph/SkeletonParagraph")['default']
    'VanSkeletonTitle': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-title/SkeletonTitle")['default']
    'VanSlider': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/slider/Slider")['default']
    'VanSpace': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/space/Space")['default']
    'VanStep': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/step/Step")['default']
    'VanStepper': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/stepper/Stepper")['default']
    'VanSticky': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sticky/Sticky")['default']
    'VanSteps': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/steps/Steps")['default']
    'VanSwipe': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe/Swipe")['default']
    'VanSwipeCell': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-cell/SwipeCell")['default']
    'VanSwipeItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-item/SwipeItem")['default']
    'VanSubmitBar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/submit-bar/SubmitBar")['default']
    'VanSwitch': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/switch/Switch")['default']
    'VanTab': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tab/Tab")['default']
    'VanTabbarItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar-item/TabbarItem")['default']
    'VanTabs': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabs/Tabs")['default']
    'VanTabbar': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar/Tabbar")['default']
    'VanTag': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tag/Tag")['default']
    'VanTextEllipsis': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/text-ellipsis/TextEllipsis")['default']
    'VanTimePicker': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/time-picker/TimePicker")['default']
    'VanTreeSelect': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tree-select/TreeSelect")['default']
    'VanToast': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/toast/Toast")['default']
    'VanUploader': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/uploader/Uploader")['default']
    'VanWatermark': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/watermark/Watermark")['default']
    'VanGridItem': typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid-item/GridItem")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyOpenHeyTalk': LazyComponent<typeof import("../components/OpenHeyTalk/index.vue")['default']>
    'LazyProgressBar': LazyComponent<typeof import("../components/ProgressBar/index.vue")['default']>
    'LazyVideoPlayer': LazyComponent<typeof import("../components/VideoPlayer/index.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyVanActionBarButton': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-button/ActionBarButton")['default']>
    'LazyVanActionBarIcon': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-icon/ActionBarIcon")['default']>
    'LazyVanActionBar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar/ActionBar")['default']>
    'LazyVanActionSheet': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-sheet/ActionSheet")['default']>
    'LazyVanAddressEdit': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-edit/AddressEdit")['default']>
    'LazyVanBackTop': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/back-top/BackTop")['default']>
    'LazyVanArea': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/area/Area")['default']>
    'LazyVanBadge': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/badge/Badge")['default']>
    'LazyVanBarrage': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/barrage/Barrage")['default']>
    'LazyVanButton': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/button/Button")['default']>
    'LazyVanCalendar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/calendar/Calendar")['default']>
    'LazyVanCascader': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cascader/Cascader")['default']>
    'LazyVanCard': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/card/Card")['default']>
    'LazyVanCell': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell/Cell")['default']>
    'LazyVanCellGroup': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell-group/CellGroup")['default']>
    'LazyVanCheckbox': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox/Checkbox")['default']>
    'LazyVanCircle': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/circle/Circle")['default']>
    'LazyVanCol': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/col/Col")['default']>
    'LazyVanCollapse': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse/Collapse")['default']>
    'LazyVanAddressList': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-list/AddressList")['default']>
    'LazyVanCollapseItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse-item/CollapseItem")['default']>
    'LazyVanConfigProvider': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/config-provider/ConfigProvider")['default']>
    'LazyVanContactCard': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-card/ContactCard")['default']>
    'LazyVanContactEdit': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-edit/ContactEdit")['default']>
    'LazyVanContactList': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-list/ContactList")['default']>
    'LazyVanCountDown': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/count-down/CountDown")['default']>
    'LazyVanCoupon': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon/Coupon")['default']>
    'LazyVanCouponCell': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-cell/CouponCell")['default']>
    'LazyVanCouponList': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-list/CouponList")['default']>
    'LazyVanDialog': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dialog/Dialog")['default']>
    'LazyVanDivider': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/divider/Divider")['default']>
    'LazyVanDropdownItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-item/DropdownItem")['default']>
    'LazyVanDropdownMenu': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-menu/DropdownMenu")['default']>
    'LazyVanDatePicker': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/date-picker/DatePicker")['default']>
    'LazyVanEmpty': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/empty/Empty")['default']>
    'LazyVanFloatingBubble': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-bubble/FloatingBubble")['default']>
    'LazyVanCheckboxGroup': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox-group/CheckboxGroup")['default']>
    'LazyVanFloatingPanel': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-panel/FloatingPanel")['default']>
    'LazyVanForm': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/form/Form")['default']>
    'LazyVanGrid': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid/Grid")['default']>
    'LazyVanHighlight': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/highlight/Highlight")['default']>
    'LazyVanIcon': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/icon/Icon")['default']>
    'LazyVanImage': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image/Image")['default']>
    'LazyVanImagePreview': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image-preview/ImagePreview")['default']>
    'LazyVanIndexBar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-bar/IndexBar")['default']>
    'LazyVanIndexAnchor': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-anchor/IndexAnchor")['default']>
    'LazyVanList': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/list/List")['default']>
    'LazyVanLoading': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/loading/Loading")['default']>
    'LazyVanNoticeBar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notice-bar/NoticeBar")['default']>
    'LazyVanNavBar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/nav-bar/NavBar")['default']>
    'LazyVanNumberKeyboard': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/number-keyboard/NumberKeyboard")['default']>
    'LazyVanNotify': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notify/Notify")['default']>
    'LazyVanPagination': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pagination/Pagination")['default']>
    'LazyVanOverlay': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/overlay/Overlay")['default']>
    'LazyVanPicker': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker/Picker")['default']>
    'LazyVanPickerGroup': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker-group/PickerGroup")['default']>
    'LazyVanPasswordInput': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/password-input/PasswordInput")['default']>
    'LazyVanPopup': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popup/Popup")['default']>
    'LazyVanProgress': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/progress/Progress")['default']>
    'LazyVanPullRefresh': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pull-refresh/PullRefresh")['default']>
    'LazyVanPopover': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popover/Popover")['default']>
    'LazyVanRadio': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio/Radio")['default']>
    'LazyVanRollingText': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rolling-text/RollingText")['default']>
    'LazyVanRadioGroup': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio-group/RadioGroup")['default']>
    'LazyVanRate': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rate/Rate")['default']>
    'LazyVanRow': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/row/Row")['default']>
    'LazyVanSearch': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/search/Search")['default']>
    'LazyVanShareSheet': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/share-sheet/ShareSheet")['default']>
    'LazyVanSidebar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar/Sidebar")['default']>
    'LazyVanSidebarItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar-item/SidebarItem")['default']>
    'LazyVanField': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/field/Field")['default']>
    'LazyVanSignature': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/signature/Signature")['default']>
    'LazyVanSkeleton': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton/Skeleton")['default']>
    'LazyVanSkeletonAvatar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-avatar/SkeletonAvatar")['default']>
    'LazyVanSkeletonImage': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-image/SkeletonImage")['default']>
    'LazyVanSkeletonParagraph': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-paragraph/SkeletonParagraph")['default']>
    'LazyVanSkeletonTitle': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-title/SkeletonTitle")['default']>
    'LazyVanSlider': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/slider/Slider")['default']>
    'LazyVanSpace': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/space/Space")['default']>
    'LazyVanStep': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/step/Step")['default']>
    'LazyVanStepper': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/stepper/Stepper")['default']>
    'LazyVanSticky': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sticky/Sticky")['default']>
    'LazyVanSteps': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/steps/Steps")['default']>
    'LazyVanSwipe': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe/Swipe")['default']>
    'LazyVanSwipeCell': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-cell/SwipeCell")['default']>
    'LazyVanSwipeItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-item/SwipeItem")['default']>
    'LazyVanSubmitBar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/submit-bar/SubmitBar")['default']>
    'LazyVanSwitch': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/switch/Switch")['default']>
    'LazyVanTab': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tab/Tab")['default']>
    'LazyVanTabbarItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar-item/TabbarItem")['default']>
    'LazyVanTabs': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabs/Tabs")['default']>
    'LazyVanTabbar': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar/Tabbar")['default']>
    'LazyVanTag': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tag/Tag")['default']>
    'LazyVanTextEllipsis': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/text-ellipsis/TextEllipsis")['default']>
    'LazyVanTimePicker': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/time-picker/TimePicker")['default']>
    'LazyVanTreeSelect': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tree-select/TreeSelect")['default']>
    'LazyVanToast': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/toast/Toast")['default']>
    'LazyVanUploader': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/uploader/Uploader")['default']>
    'LazyVanWatermark': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/watermark/Watermark")['default']>
    'LazyVanGridItem': LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid-item/GridItem")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const OpenHeyTalk: typeof import("../components/OpenHeyTalk/index.vue")['default']
export const ProgressBar: typeof import("../components/ProgressBar/index.vue")['default']
export const VideoPlayer: typeof import("../components/VideoPlayer/index.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const VanActionBarButton: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-button/ActionBarButton")['default']
export const VanActionBarIcon: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-icon/ActionBarIcon")['default']
export const VanActionBar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar/ActionBar")['default']
export const VanActionSheet: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-sheet/ActionSheet")['default']
export const VanAddressEdit: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-edit/AddressEdit")['default']
export const VanBackTop: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/back-top/BackTop")['default']
export const VanArea: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/area/Area")['default']
export const VanBadge: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/badge/Badge")['default']
export const VanBarrage: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/barrage/Barrage")['default']
export const VanButton: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/button/Button")['default']
export const VanCalendar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/calendar/Calendar")['default']
export const VanCascader: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cascader/Cascader")['default']
export const VanCard: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/card/Card")['default']
export const VanCell: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell/Cell")['default']
export const VanCellGroup: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell-group/CellGroup")['default']
export const VanCheckbox: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox/Checkbox")['default']
export const VanCircle: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/circle/Circle")['default']
export const VanCol: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/col/Col")['default']
export const VanCollapse: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse/Collapse")['default']
export const VanAddressList: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-list/AddressList")['default']
export const VanCollapseItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse-item/CollapseItem")['default']
export const VanConfigProvider: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/config-provider/ConfigProvider")['default']
export const VanContactCard: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-card/ContactCard")['default']
export const VanContactEdit: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-edit/ContactEdit")['default']
export const VanContactList: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-list/ContactList")['default']
export const VanCountDown: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/count-down/CountDown")['default']
export const VanCoupon: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon/Coupon")['default']
export const VanCouponCell: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-cell/CouponCell")['default']
export const VanCouponList: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-list/CouponList")['default']
export const VanDialog: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dialog/Dialog")['default']
export const VanDivider: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/divider/Divider")['default']
export const VanDropdownItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-item/DropdownItem")['default']
export const VanDropdownMenu: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-menu/DropdownMenu")['default']
export const VanDatePicker: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/date-picker/DatePicker")['default']
export const VanEmpty: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/empty/Empty")['default']
export const VanFloatingBubble: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-bubble/FloatingBubble")['default']
export const VanCheckboxGroup: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox-group/CheckboxGroup")['default']
export const VanFloatingPanel: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-panel/FloatingPanel")['default']
export const VanForm: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/form/Form")['default']
export const VanGrid: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid/Grid")['default']
export const VanHighlight: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/highlight/Highlight")['default']
export const VanIcon: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/icon/Icon")['default']
export const VanImage: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image/Image")['default']
export const VanImagePreview: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image-preview/ImagePreview")['default']
export const VanIndexBar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-bar/IndexBar")['default']
export const VanIndexAnchor: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-anchor/IndexAnchor")['default']
export const VanList: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/list/List")['default']
export const VanLoading: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/loading/Loading")['default']
export const VanNoticeBar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notice-bar/NoticeBar")['default']
export const VanNavBar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/nav-bar/NavBar")['default']
export const VanNumberKeyboard: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/number-keyboard/NumberKeyboard")['default']
export const VanNotify: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notify/Notify")['default']
export const VanPagination: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pagination/Pagination")['default']
export const VanOverlay: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/overlay/Overlay")['default']
export const VanPicker: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker/Picker")['default']
export const VanPickerGroup: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker-group/PickerGroup")['default']
export const VanPasswordInput: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/password-input/PasswordInput")['default']
export const VanPopup: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popup/Popup")['default']
export const VanProgress: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/progress/Progress")['default']
export const VanPullRefresh: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pull-refresh/PullRefresh")['default']
export const VanPopover: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popover/Popover")['default']
export const VanRadio: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio/Radio")['default']
export const VanRollingText: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rolling-text/RollingText")['default']
export const VanRadioGroup: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio-group/RadioGroup")['default']
export const VanRate: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rate/Rate")['default']
export const VanRow: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/row/Row")['default']
export const VanSearch: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/search/Search")['default']
export const VanShareSheet: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/share-sheet/ShareSheet")['default']
export const VanSidebar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar/Sidebar")['default']
export const VanSidebarItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar-item/SidebarItem")['default']
export const VanField: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/field/Field")['default']
export const VanSignature: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/signature/Signature")['default']
export const VanSkeleton: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton/Skeleton")['default']
export const VanSkeletonAvatar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-avatar/SkeletonAvatar")['default']
export const VanSkeletonImage: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-image/SkeletonImage")['default']
export const VanSkeletonParagraph: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-paragraph/SkeletonParagraph")['default']
export const VanSkeletonTitle: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-title/SkeletonTitle")['default']
export const VanSlider: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/slider/Slider")['default']
export const VanSpace: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/space/Space")['default']
export const VanStep: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/step/Step")['default']
export const VanStepper: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/stepper/Stepper")['default']
export const VanSticky: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sticky/Sticky")['default']
export const VanSteps: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/steps/Steps")['default']
export const VanSwipe: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe/Swipe")['default']
export const VanSwipeCell: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-cell/SwipeCell")['default']
export const VanSwipeItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-item/SwipeItem")['default']
export const VanSubmitBar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/submit-bar/SubmitBar")['default']
export const VanSwitch: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/switch/Switch")['default']
export const VanTab: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tab/Tab")['default']
export const VanTabbarItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar-item/TabbarItem")['default']
export const VanTabs: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabs/Tabs")['default']
export const VanTabbar: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar/Tabbar")['default']
export const VanTag: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tag/Tag")['default']
export const VanTextEllipsis: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/text-ellipsis/TextEllipsis")['default']
export const VanTimePicker: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/time-picker/TimePicker")['default']
export const VanTreeSelect: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tree-select/TreeSelect")['default']
export const VanToast: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/toast/Toast")['default']
export const VanUploader: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/uploader/Uploader")['default']
export const VanWatermark: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/watermark/Watermark")['default']
export const VanGridItem: typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid-item/GridItem")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyOpenHeyTalk: LazyComponent<typeof import("../components/OpenHeyTalk/index.vue")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../components/ProgressBar/index.vue")['default']>
export const LazyVideoPlayer: LazyComponent<typeof import("../components/VideoPlayer/index.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyVanActionBarButton: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-button/ActionBarButton")['default']>
export const LazyVanActionBarIcon: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar-icon/ActionBarIcon")['default']>
export const LazyVanActionBar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-bar/ActionBar")['default']>
export const LazyVanActionSheet: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/action-sheet/ActionSheet")['default']>
export const LazyVanAddressEdit: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-edit/AddressEdit")['default']>
export const LazyVanBackTop: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/back-top/BackTop")['default']>
export const LazyVanArea: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/area/Area")['default']>
export const LazyVanBadge: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/badge/Badge")['default']>
export const LazyVanBarrage: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/barrage/Barrage")['default']>
export const LazyVanButton: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/button/Button")['default']>
export const LazyVanCalendar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/calendar/Calendar")['default']>
export const LazyVanCascader: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cascader/Cascader")['default']>
export const LazyVanCard: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/card/Card")['default']>
export const LazyVanCell: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell/Cell")['default']>
export const LazyVanCellGroup: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/cell-group/CellGroup")['default']>
export const LazyVanCheckbox: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox/Checkbox")['default']>
export const LazyVanCircle: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/circle/Circle")['default']>
export const LazyVanCol: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/col/Col")['default']>
export const LazyVanCollapse: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse/Collapse")['default']>
export const LazyVanAddressList: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/address-list/AddressList")['default']>
export const LazyVanCollapseItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/collapse-item/CollapseItem")['default']>
export const LazyVanConfigProvider: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/config-provider/ConfigProvider")['default']>
export const LazyVanContactCard: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-card/ContactCard")['default']>
export const LazyVanContactEdit: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-edit/ContactEdit")['default']>
export const LazyVanContactList: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/contact-list/ContactList")['default']>
export const LazyVanCountDown: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/count-down/CountDown")['default']>
export const LazyVanCoupon: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon/Coupon")['default']>
export const LazyVanCouponCell: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-cell/CouponCell")['default']>
export const LazyVanCouponList: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/coupon-list/CouponList")['default']>
export const LazyVanDialog: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dialog/Dialog")['default']>
export const LazyVanDivider: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/divider/Divider")['default']>
export const LazyVanDropdownItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-item/DropdownItem")['default']>
export const LazyVanDropdownMenu: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/dropdown-menu/DropdownMenu")['default']>
export const LazyVanDatePicker: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/date-picker/DatePicker")['default']>
export const LazyVanEmpty: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/empty/Empty")['default']>
export const LazyVanFloatingBubble: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-bubble/FloatingBubble")['default']>
export const LazyVanCheckboxGroup: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/checkbox-group/CheckboxGroup")['default']>
export const LazyVanFloatingPanel: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/floating-panel/FloatingPanel")['default']>
export const LazyVanForm: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/form/Form")['default']>
export const LazyVanGrid: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid/Grid")['default']>
export const LazyVanHighlight: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/highlight/Highlight")['default']>
export const LazyVanIcon: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/icon/Icon")['default']>
export const LazyVanImage: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image/Image")['default']>
export const LazyVanImagePreview: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/image-preview/ImagePreview")['default']>
export const LazyVanIndexBar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-bar/IndexBar")['default']>
export const LazyVanIndexAnchor: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/index-anchor/IndexAnchor")['default']>
export const LazyVanList: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/list/List")['default']>
export const LazyVanLoading: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/loading/Loading")['default']>
export const LazyVanNoticeBar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notice-bar/NoticeBar")['default']>
export const LazyVanNavBar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/nav-bar/NavBar")['default']>
export const LazyVanNumberKeyboard: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/number-keyboard/NumberKeyboard")['default']>
export const LazyVanNotify: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/notify/Notify")['default']>
export const LazyVanPagination: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pagination/Pagination")['default']>
export const LazyVanOverlay: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/overlay/Overlay")['default']>
export const LazyVanPicker: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker/Picker")['default']>
export const LazyVanPickerGroup: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/picker-group/PickerGroup")['default']>
export const LazyVanPasswordInput: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/password-input/PasswordInput")['default']>
export const LazyVanPopup: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popup/Popup")['default']>
export const LazyVanProgress: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/progress/Progress")['default']>
export const LazyVanPullRefresh: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/pull-refresh/PullRefresh")['default']>
export const LazyVanPopover: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/popover/Popover")['default']>
export const LazyVanRadio: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio/Radio")['default']>
export const LazyVanRollingText: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rolling-text/RollingText")['default']>
export const LazyVanRadioGroup: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/radio-group/RadioGroup")['default']>
export const LazyVanRate: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/rate/Rate")['default']>
export const LazyVanRow: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/row/Row")['default']>
export const LazyVanSearch: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/search/Search")['default']>
export const LazyVanShareSheet: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/share-sheet/ShareSheet")['default']>
export const LazyVanSidebar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar/Sidebar")['default']>
export const LazyVanSidebarItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sidebar-item/SidebarItem")['default']>
export const LazyVanField: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/field/Field")['default']>
export const LazyVanSignature: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/signature/Signature")['default']>
export const LazyVanSkeleton: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton/Skeleton")['default']>
export const LazyVanSkeletonAvatar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-avatar/SkeletonAvatar")['default']>
export const LazyVanSkeletonImage: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-image/SkeletonImage")['default']>
export const LazyVanSkeletonParagraph: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-paragraph/SkeletonParagraph")['default']>
export const LazyVanSkeletonTitle: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/skeleton-title/SkeletonTitle")['default']>
export const LazyVanSlider: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/slider/Slider")['default']>
export const LazyVanSpace: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/space/Space")['default']>
export const LazyVanStep: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/step/Step")['default']>
export const LazyVanStepper: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/stepper/Stepper")['default']>
export const LazyVanSticky: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/sticky/Sticky")['default']>
export const LazyVanSteps: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/steps/Steps")['default']>
export const LazyVanSwipe: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe/Swipe")['default']>
export const LazyVanSwipeCell: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-cell/SwipeCell")['default']>
export const LazyVanSwipeItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/swipe-item/SwipeItem")['default']>
export const LazyVanSubmitBar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/submit-bar/SubmitBar")['default']>
export const LazyVanSwitch: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/switch/Switch")['default']>
export const LazyVanTab: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tab/Tab")['default']>
export const LazyVanTabbarItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar-item/TabbarItem")['default']>
export const LazyVanTabs: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabs/Tabs")['default']>
export const LazyVanTabbar: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tabbar/Tabbar")['default']>
export const LazyVanTag: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tag/Tag")['default']>
export const LazyVanTextEllipsis: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/text-ellipsis/TextEllipsis")['default']>
export const LazyVanTimePicker: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/time-picker/TimePicker")['default']>
export const LazyVanTreeSelect: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/tree-select/TreeSelect")['default']>
export const LazyVanToast: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/toast/Toast")['default']>
export const LazyVanUploader: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/uploader/Uploader")['default']>
export const LazyVanWatermark: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/watermark/Watermark")['default']>
export const LazyVanGridItem: LazyComponent<typeof import("../node_modules/.pnpm/vant@4.9.19_vue@3.5.13_typescript@5.8.3_/node_modules/vant/es/grid-item/GridItem")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
