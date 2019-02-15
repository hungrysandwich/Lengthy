<template>
<div id="app">

    <div class="sidebar">

    <h1>Lengthy</h1>

    <p>
    Words: <span class="bold">{{$parent.$parent.stats.textWords}}</span>
    </p>
    <p v-if="$parent.$parent.stats.splitSecs">
    Time to Say: <br>
    <span class="bold">{{$parent.$parent.stats.splitMins}}</span> mins <span class="bold">{{$parent.$parent.stats.splitSecs}}</span> secs
    </p>

    

    <div class="actions">

            <p @click="$parent.$parent.target.set = !$parent.$parent.target.set">
            <i class="fas fa-bullseye" style="color:#676767; transform:scale(0.9);"></i> 
               <span v-html="$parent.$parent.target.set ? 'Remove Target' : 'Add Target'"></span>
            </p>

            

            <p v-if="$parent.$parent.target.set" class="set-target">
            <input v-model="$parent.$parent.target.targetMins" @input="$parent.$parent.handleInput()" class="target-mins" value="00"> mins
            <input v-model="$parent.$parent.target.targetSecs" @input="$parent.$parent.handleInput()" class="target-secs" value="00"> secs
            </p>

            <p v-if="$parent.$parent.target.set && !$parent.$parent.target.wordsOver == '' && ($parent.$parent.target.targetTotalSecs || $parent.$parent.target.targetTotalMins )" class="total-target">Cut <span class="bold"> {{$parent.$parent.target.wordsOver}}  </span>words</p>

             <p v-if="$parent.$parent.target.set && $parent.$parent.target.wordsOver == '' && ($parent.$parent.target.targetTotalSecs || $parent.$parent.target.targetTotalMins ) > 0" class="total-target"> On Target </p>

             <p @click="$parent.$parent.settings.open= !$parent.$parent.settings.open" >
            <i class="fas fa-cog" style="color:#676767; transform:scale(0.9);"></i> Settings
            </p>

            <p v-if="$parent.$parent.settings.open">
            Speed:
            <input v-model="$parent.$parent.settings.readSpeed" @input="$parent.$parent.handleInput(); $parent.$parent.calculateTarget(); $parent.$parent.speechStats();" class="read-speed" value="00"> w/ per sec</p>

            <p @click="$parent.$parent.makePdf()" >
            <i class="fas fa-arrow-down" style="color:#676767; transform:scale(0.9);"></i> Download PDF
            </p>

           

    </div>    

    <div class="credits">
        <a href="http://hungrysandwich.club"><i class="fa fa-heart" style="color:#676767; transform:scale(0.9);"></i> Hungry Sandwich Club</a>
    </div>
    
    
    </div>

    <div class="main-content" :class="$parent.$parent.pageReady == true ? 'reveal' : ''">

        <div class="inner">
        
        <input class="title" v-model="$parent.$parent.scriptContent.title">
        <span @click="$parent.$parent.saveScript()" class="save-btn" v-if="$parent.$parent.shareLink == ''">Share <i class="fa fa-link" style="color:#7d7c7c; transform:scale(0.8);"></i></span>
        <span v-if="$parent.$parent.shareLink" class="save-btn">Link: <a :href="$parent.$parent.shareLink" target="_blank">{{$parent.$parent.shareLink}}</a> <i class="fa fa-check" style="color: #42b983;; transform:scale(0.8);"></i></span>


        <medium-editor class="edit-box" :text='$parent.$parent.scriptContent.text' :options='options' v-on:edit='$parent.$parent.processEditOperation' custom-tag='div'>
        </medium-editor>

        <div v-model="msg" contenteditable></div>

        </div>
    </div>
<div class="hide-offscreen">
    <div class="pdf-layout">
         <span class="title" v-html="$parent.$parent.scriptContent.title"></span>
        <div class="report">
            <p class="bold">
            Report:</p>
            <p>
            Word Count: <span class="bold">{{$parent.$parent.stats.textWords}}</span><br>
            
            <span v-if="$parent.$parent.stats.splitSecs">
            Approx Time to Say: <br>
            <span class="bold">{{$parent.$parent.stats.splitMins}}</span> mins <span class="bold">{{$parent.$parent.stats.splitSecs}}</span> secs
            </span>
            </p>
        </div>

        <div class="pdf__text" v-html="$parent.$parent.scriptContent.text">
           
        </div>


    </div>
   </div>

</div>

</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       text: '',
       countedText: '',
        options: {
             placeholder: {
            /* This example includes the default options for placeholder,
            if nothing is passed this is what it used */
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...',
            hideOnClick: true
            },
            toolbar: {
                buttons: ['bold', 'strikethrough', 'underline', 'paragraph', 'h1']
            }
        }
    }
  },
   methods: {


  }, 
  created: function () {

    // this.makeDoc();

  }
};
</script>