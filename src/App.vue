<template>

  <router-view>
  </router-view>

</template>



<style lang="scss">

.sidebar {
  background:#FFCC00;
  width:300px;
  height:100%;
  min-height:100vh;
  display:inline-block;
  text-align:left;
  padding: 30px;
  position:fixed;

  .bold {
    font-weight:600;
  }

  h1 {
    margin-top:0;
    margin-bottom:30px;
  }

  p {
    font-size: 22px;
  }
}

.main-content {
  display:inline-block;
  padding-top:100px;
  margin:0 10%;
  margin-left:calc(300px + 10%);
  flex:1;
  opacity: 0;
  transition: opacity 1s ease;

  &.reveal {
    opacity:1;
  }

  .inner {
    display:block;
    text-align: left;
  }
}

.download-btn {
  cursor:pointer;
  text-decoration:underline;
}

html {
      background: #fff;
}

body {
  margin: 0;
  padding: 0;
  background:#fff;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display:flex;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.edit-box {
  // width:70%;
  text-align:left;
  margin: 0 auto;
  min-height: 400px;
  position: relative;

    span,p {
        font-size: 21px;
    line-height: 28px;
    word-spacing: .5px;
    font-weight: normal;
    margin:0;
  }

  p + p {
    margin-top:1.5rem;
  }

  h1 {
    font-size: 30px;
  }

  &:focus {
    outline: solid 2px #efefef;
  }
}

.edit-box {
   * + * {
    margin-top:1.5rem;
  }
}

.title {
  width:100%;
  text-align:left;
  font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    border:none;
    margin-bottom:2rem;

    &:focus {
      outline: none;
    }
}

.save-btn {
  display:inline-block;
  // width:70%;
  text-align:left;
  margin-bottom:2rem;
  font-size: 18px;
  cursor:pointer;
  opacity:1;
  transition:opacity 0.6s ease;

  &:hover {
    opacity:0.7;
  }
}



// Tim Style toolbar

.medium-toolbar-arrow-under:after {
  border-color: #2f1e07 transparent transparent transparent;
  top: 60px; }

.medium-toolbar-arrow-over:before {
  border-color: transparent transparent #2f1e07 transparent; }

.medium-editor-toolbar {
  background-color: #2f1e07;
  border: 1px solid #5b3a0e;
  border-radius: 6px; }
  .medium-editor-toolbar li button {
    background-color: transparent;
    border: none;
    border-right: 1px solid #5b3a0e;
    box-sizing: border-box;
    color: #ffedd5;
    height: 60px;
    min-width: 60px;
    -webkit-transition: background-color .2s ease-in, color .2s ease-in;
            transition: background-color .2s ease-in, color .2s ease-in; }
    .medium-editor-toolbar li button:hover {
      background-color: #030200;
      color: #ffedd5; }
  .medium-editor-toolbar li .medium-editor-button-first {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px; }
  .medium-editor-toolbar li .medium-editor-button-last {
    border-bottom-right-radius: 6px;
    border-right: none;
    border-top-right-radius: 6px; }
  .medium-editor-toolbar li .medium-editor-button-active {
    background-color: #030200;
    color: #ffedd5; }

.medium-editor-toolbar-form {
  background: #2f1e07;
  border-radius: 6px;
  color: #ffedd5; }
  .medium-editor-toolbar-form .medium-editor-toolbar-input {
    background: #2f1e07;
    color: #ffedd5;
    height: 60px; }
    .medium-editor-toolbar-form .medium-editor-toolbar-input::-webkit-input-placeholder {
      color: #ffedd5;
      color: rgba(255, 237, 213, 0.8); }
    .medium-editor-toolbar-form .medium-editor-toolbar-input:-moz-placeholder {
      /* Firefox 18- */
      color: #ffedd5;
      color: rgba(255, 237, 213, 0.8); }
    .medium-editor-toolbar-form .medium-editor-toolbar-input::-moz-placeholder {
      /* Firefox 19+ */
      color: #ffedd5;
      color: rgba(255, 237, 213, 0.8); }
    .medium-editor-toolbar-form .medium-editor-toolbar-input:-ms-input-placeholder {
      color: #ffedd5;
      color: rgba(255, 237, 213, 0.8); }
  .medium-editor-toolbar-form a {
    color: #ffedd5; }

.medium-editor-toolbar-anchor-preview {
  background: #2f1e07;
  border-radius: 6px;
  color: #ffedd5; }

.medium-editor-placeholder:after {
  color: #7d7d7d;
  font-size:21px; }

  .hide-offscreen {
    position:absolute;
    z-index:-1;
    left:0;
    top:0;
    opacity:0;
  }

  .pdf-layout {
    width:100%;
    height:500px;
    // background:#F7F9FA;
    font-family:"Avenir";
    position:relative;
    top:0;
    left:0;
    opacity:1;
    text-align:left;
    margin:0px;
    display:inline-block;
    height:auto;
    width:100%;
    // z-index:-1;
    display:block;
  }

  .report p {
    // font-weight:bold;
    font-size:18px;
    margin:1rem 0;
  }

   .report .bold {
     font-weight:bold;
   }

.actions {
  margin-top:40px;

  p {
    cursor:pointer;
    transition:opacity 0.5s ease;
    &:hover {
      opacity:0.7;
    }
  }
}

.credits {
  position:absolute;
  bottom:0;
  padding:30px 0;
  font-size:14px;

  a {
    color:inherit;
    text-decoration:none;

    &:hover {
      opacity:0.6;
    }
  }
}

 .target-mins, .target-secs, .read-speed {
   font-size:22px;
   font-weight:bold;
   background:transparent;
   color:#2c3e50;
   border:none;
   width:32px;
   border-bottom: dashed 2px #99abbc;
   text-align:center;

   &:focus {
     outline:none;
     background:#efefef;
   }
 }

 .read-speed {
   width: 37px;
 }

  .pdf__text p {
    font-size:18px;
    margin-top:0;
  }

  p.set-target {
    margin-bottom:1rem;

    &:hover {
      opacity:1;
    }
  }

</style>
