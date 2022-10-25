import React from 'react'
import ExempleSuggestionsComp from '../components/ExempleSuggestionsComp'
import NewSuggestionPage from '../components/pgae with almog/NewSuggestionPage'
import CardTwo from '../components/UI/CardTwo'
import IconButton from '../components/UI/IconButton'


const SuggestionPage = () => {
  return (
    <div>
        <CardTwo>
        <h1>עמוד הצעות שלכם</h1>
        <NewSuggestionPage/> 
      <ExempleSuggestionsComp/>
       <IconButton/>
      </CardTwo>
    </div>
  )
}

export default SuggestionPage