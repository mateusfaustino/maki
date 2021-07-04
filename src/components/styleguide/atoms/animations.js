const rotating=`
  @keyframes rotating {
    from {
      transform: rotate(0deg); }
    to {
      transform: rotate(360deg); 
    } 
  }
  animation-name: rotating;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
`
const buttonClick=`
  &:before {
    content: "";
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    display: block;
    width: 0;
    padding-top: 0;
      
    border-radius: 100%;
    
    background-color: rgba(236, 240, 241, .3);
    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
  }
`

export const animations = {
  rotating:rotating,
  buttonClick:buttonClick
}
export default animations