<template>
  <div>
    <textarea cols="80" id="editor1" name="editor1" rows="10" data-sample-short></textarea>
  </div>
</template>
<script>
export default {
  name: 'easyimage',
  data () {
    return {
      value:
        '<p>This is some <strong>sample text</strong>. You are using <a href="https://ckeditor.com/">CKEditor</a>.</p><img alt="" src="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif" width="313" data-cke-saved-src="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif" srcset="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_153 153w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_233 233w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/animations/0db40356e6c6216d07597a81f984fcbb84f2faebf633de47.gif/w_313 313w" sizes="100vw">'
    }
  },
  methods: {
    beforeDestroy: function () {
      this.ckeditor.destroy()
    }
  },
  mounted () {
    // Don't forget to add CSS for your custom styles.
    CKEDITOR.addCss(
      'figure[class*=easyimage-gradient]::before { content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }' +
        'figure[class*=easyimage-gradient] figcaption { position: relative; z-index: 2; }' +
        '.easyimage-gradient-1::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 66, 174, 234, .72 ) 100% ); }' +
        '.easyimage-gradient-2::before { background-image: linear-gradient( 135deg, rgba( 115, 110, 254, 0 ) 0%, rgba( 228, 66, 234, .72 ) 100% ); }'
    )

    this.ckeditor = CKEDITOR.replace('editor1', {
      extraPlugins: 'easyimage',
      removePlugins: 'image',
      removeDialogTabs: 'link:advanced',
      toolbar: [
        {
          name: 'document',
          items: ['Undo', 'Redo']
        },
        {
          name: 'styles',
          items: ['Format']
        },
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList']
        },
        {
          name: 'links',
          items: ['Link', 'Unlink']
        },
        {
          name: 'insert',
          items: ['EasyImageUpload']
        }
      ],
      height: 630,
      cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
      // Note: this is a token endpoint to be used for CKEditor 4 samples only. Images uploaded using this token may be deleted automatically at any moment.
      // To create your own token URL please visit https://ckeditor.com/ckeditor-cloud-services/.
      cloudServices_tokenUrl:
        'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt',
      easyimage_styles: {
        gradient1: {
          group: 'easyimage-gradients',
          attributes: {
            class: 'easyimage-gradient-1'
          },
          label: 'Blue Gradient',
          icon:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/gradient1.png',
          iconHiDpi:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/hidpi/gradient1.png'
        },
        gradient2: {
          group: 'easyimage-gradients',
          attributes: {
            class: 'easyimage-gradient-2'
          },
          label: 'Pink Gradient',
          icon:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/gradient2.png',
          iconHiDpi:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/hidpi/gradient2.png'
        },
        noGradient: {
          group: 'easyimage-gradients',
          attributes: {
            class: 'easyimage-no-gradient'
          },
          label: 'No Gradient',
          icon:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/nogradient.png',
          iconHiDpi:
            'https://ckeditor.com/docs/ckeditor4/4.13.0/examples/assets/easyimage/icons/hidpi/nogradient.png'
        }
      },
      easyimage_toolbar: [
        'EasyImageFull',
        'EasyImageSide',
        'EasyImageGradient1',
        'EasyImageGradient2',
        'EasyImageNoGradient',
        'EasyImageAlt'
      ]
    })
  }
}
</script>
