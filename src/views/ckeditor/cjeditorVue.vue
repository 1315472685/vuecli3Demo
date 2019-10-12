<template>
  <div>
    <textarea cols="80" id="editor1" name="editor1" rows="10" data-sample-short>
      <p>This is some <strong>sample text</strong>. You are using <a href="https://ckeditor.com/">CKEditor</a>.</p>
  	<img alt="" src="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif" width="313" data-cke-saved-src="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif" srcset="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_153 153w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_233 233w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_313 313w" sizes="100vw">

  </textarea>
    <el-button @click="add" type="primary" icon="el-icon-edit" circle>查看源码</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    add () {
      let val = this.ckeditor.getData()
      console.log(val)
    }
  },
  mounted () {
    const self = this
    self.ckeditor = CKEDITOR.replace('editor1', {
      extraPlugins: 'image2,colorbutton,colordialog,colorbutton,mathjax',
      removeButtons: 'clipboard', // 移除的按钮.
      removePlugins: 'image',
      mathJaxLib:
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
      colorButton_colors: 'CF5D4E,454545,FFF,CCC,DDD,CCEAEE,66AB16',
      colorButton_enableAutomatic: false,
      height: 620
    })

    if (CKEDITOR.env.ie && CKEDITOR.env.version == 8) {
      document.getElementById('ie8-warning').className = 'tip alert';
    }
  },
  // mounted () {
  //   const self = this

  //   // 渲染编辑器
  //   // 使用该CKEDITOR.replace()方法将现有<textarea>元素替换为CKEditor。
  //   self.ckeditor = CKEDITOR.replace('editor1', {
  //     extraPlugins:
  //       'image2,uploadimage,colorbutton,colordialog,colorbutton,mathjax',
  // colorButton_colors: 'CF5D4E,454545,FFF,CCC,DDD,CCEAEE,66AB16',
  // colorButton_enableAutomatic: false,
  //     mathJaxLib:
  //       'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
  //     removePlugins: 'image',

  //     toolbar: [
  //       {
  //         name: 'clipboard',
  //         items: ['Undo', 'Redo']
  //       },
  //       {
  //         name: 'styles',
  //         items: ['Styles', 'Format']
  //       },
  //       {
  //         name: 'colors',
  //         items: ['TextColor', 'BGColor', 'CopyFormatting']
  //       },
  //       {
  //         name: 'basicstyles',
  //         items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']
  //       },
  //       {
  //         name: 'paragraph',
  //         items: [
  //           'NumberedList',
  //           'BulletedList',
  //           '-',
  //           'Outdent',
  //           'Indent',
  //           '-',
  //           'Blockquote'
  //         ]
  //       },
  //       {
  //         name: 'links',
  //         items: ['Link', 'Unlink']
  //       },
  //       {
  //         name: 'insert',
  //         items: ['Image', 'Table']
  //       },
  //       {
  //         name: 'tools',
  //         items: ['Maximize']
  //       },
  //       {
  //         name: 'editing',
  //         items: ['Scayt']
  //       }
  //     ],

  //     // Configure your file manager integration. This example uses CKFinder 3 for PHP.
  //     filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html',
  //     filebrowserImageBrowseUrl:
  //       '/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
  //     filebrowserUploadUrl:
  //       '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
  //     filebrowserImageUploadUrl:
  //       '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

  //     // Upload dropped or pasted images to the CKFinder connector (note that the response type is set to JSON).
  //     uploadUrl:
  //       '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

  //     // Reduce the list of block elements listed in the Format drop-down to the most commonly used.
  //     format_tags: 'p;h1;h2;h3;pre',
  //     // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
  //     removeDialogTabs: 'image:advanced;link:advanced',

  //     height: 650
  //   })
  //   if (CKEDITOR.env.ie && CKEDITOR.env.version == 8) {
  //     document.getElementById('ie8-warning').className = 'tip alert';
  //   }
  // },
  // 销毁组件前，销毁编辑器
  beforeDestroy: function () {
    this.ckeditor.destroy()
  }
}
</script>
