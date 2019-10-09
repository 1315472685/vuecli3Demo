/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here.
  // For complete reference see:
  // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

  // The toolbar groups arrangement, optimized for two toolbar rows.
  // 界面语言，默认为 'en de zh-cn'
  config.language = 'zh-cn'

  config.image_previewText = ' '/* 去掉图片预览框的文字 */
  // 设置宽高
  // config.width = '50%'
  config.height = 500
  // 编辑器样式，有三种：'kama'（默认）、'office2003'、'v2'
  // config.skin = 'office2003'
  // 背景颜色
  // config.uiColor = '#fff'

  /* 开启工具栏“图像”中文件上传功能，后面的url为图片上传要指向的的action或servlet */
  // config.filebrowserImageUploadUrl = '/blog/uploadEditorImage'
  // config.filebrowserImageUploadUrl = '/back/shopinfo/uploadFile'
  // 上传图片窗口用到的接口
  config.filebrowserImageUploadUrl = 'https://192.168.0.1/api/ECategoryDetail/UploadImg'
  config.filebrowserUploadUrl = 'https://192.168.0.1/api/ECategoryDetail/UploadImg'

  // 使上传图片弹窗出现对应的“上传”tab标签
  config.removeDialogTabs = 'image:advanced;link:advanced'
  // 粘贴图片时用得到
  config.extraPlugins = 'uploadimage'
  config.uploadUrl = 'https://192.168.0.1/api/ECategoryDetail/UploadImg'
  config.toolbarGroups = [
    // { name: 'clipboard', groups: ['clipboard', 'undo'] }, // world复制粘贴
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] }, // 拼音
    { name: 'links' },
    { name: 'insert' }, // 图片
    { name: 'forms' },
    { name: 'tools' }, // 全屏
    { name: 'document', groups: ['mode', 'document', 'doctools'] }, // 源码
    // { name: 'others' },
    // '/', // 通过加入'/'，正如在上面看到的，可以在工具栏中强制断行（row-break）。
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, // 下划线加粗中划线斜体
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] }, // 列表缩进
    { name: 'styles' }, // 样式格式
    { name: 'colors' },
    { name: 'about' }// 问号
  ]
  // 是否开启 图片和表格 的改变大小的功能 config.disableObjectResizing = true;
  config.disableObjectResizing = true // 默认为开启
  // 工具栏是否可以被收缩
  config.toolbarCanCollapse = true

  // Remove some buttons provided by the standard plugins, which are
  // 移除的按钮.
  // config.removeButtons = 'Underline,Subscript,Superscript'

  // Set the most common block elements.
  config.format_tags = 'p;h1;h2;h3;pre'

  // 取消 “拖拽以改变尺寸”功能 plugins/resize/plugin.js
  config.resize_enabled = true
}
