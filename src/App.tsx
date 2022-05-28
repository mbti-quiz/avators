import React from 'react'

const mbtis = {
  enfj: 'protagonist',
  enfp: 'campaigner',
  entj: 'commander',
  entp: 'debater',
  esfj: 'consul',
  esfp: 'entertainer',
  estj: 'executive',
  estp: 'entrepreneur',
  infj: 'advocate',
  infp: 'mediator',
  intj: 'architect',
  intp: 'logician',
  isfj: 'defender',
  isfp: 'adventurer',
  istj: 'logistician',
  istp: 'virtuoso'
}

const vlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(s => `-v${s}`)

const sexCountMap = {
  male: vlist,
  female: vlist,
  other: ['']
}

const commercials = ['', '-c', '-p'].reverse()

function App () {
  return (
    <div>
      <div>
        <a href="https://static.neris-assets.com/images/personality-types/collection.html">Full body avatars are here</a>. To download all avatars, just click ctrl+s to save the website. Please notice we do not own the avatars, this is just a self made tool to browse all the mbti avatars in one go. If you want to make use of them, please contact the author.
      </div>
      {Object.entries(mbtis).map(([mbti, name]) => (Object.entries(sexCountMap).map(([sex, counts]) => (
        <div key={mbti} style={{ display: 'flex', alignContent: 'center' }}>
          <div>
            {mbti}
          </div>
          <div>
            {
              commercials.map(commercial => (
                counts
                  .map(n => `https://static.neris-assets.com/images/personality-types/avatars/faces/${mbti}-${name}${commercial}-s3${n}-${sex}.svg`)
                  .map(src => (<img src={src} key={src} width="100px" onError={({ target }: any) => { target.style.display = 'none' }} />))
              ))
            }
            </div>
        </div>
      ))))}

      Hello world
    </div>
  )
}

export default App
