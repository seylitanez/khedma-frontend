import React from 'react'
import './logo.scss'
import { Searchloupe } from '@image'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Logo() {
  const [loupeId,setLoupeId]=useState(<rect id='loupe' y="15" width="59" height="46" fill="url(#pattern0)"/>)
  // console.log(loupeId);
  
   useEffect(()=>{
     setInterval(()=>{
       loupeId=='++'? setLoupeId(<rect id='loupe' y="15" width="59" height="46" fill="url(#pattern0)"/>):setLoupeId('++')
     },5000)
   },[])

  return (
    <div>
        <svg width="211" height="70" viewBox="0 0 211 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="k" d="M69.488 40L59.804 28.804V40H55.7V14.98H59.804V26.392L69.524 14.98H74.672L63.8 27.508L74.852 40H69.488Z" fill="#0071F2"/>
        <path id="h" d="M88.96 19.84C90.472 19.84 91.816 20.164 92.992 20.812C94.192 21.46 95.128 22.42 95.8 23.692C96.496 24.964 96.844 26.5 96.844 28.3V40H92.776V28.912C92.776 27.136 92.332 25.78 91.444 24.844C90.556 23.884 89.344 23.404 87.808 23.404C86.272 23.404 85.048 23.884 84.136 24.844C83.248 25.78 82.804 27.136 82.804 28.912V40H78.7V13.36H82.804V22.468C83.5 21.628 84.376 20.98 85.432 20.524C86.512 20.068 87.688 19.84 88.96 19.84Z" fill="#0071F2"/>
        <path id="e" d="M120.88 29.596C120.88 30.34 120.832 31.012 120.736 31.612H105.58C105.7 33.196 106.288 34.468 107.344 35.428C108.4 36.388 109.696 36.868 111.232 36.868C113.44 36.868 115 35.944 115.912 34.096H120.34C119.74 35.92 118.648 37.42 117.064 38.596C115.504 39.748 113.56 40.324 111.232 40.324C109.336 40.324 107.632 39.904 106.12 39.064C104.632 38.2 103.456 37 102.592 35.464C101.752 33.904 101.332 32.104 101.332 30.064C101.332 28.024 101.74 26.236 102.556 24.7C103.396 23.14 104.56 21.94 106.048 21.1C107.56 20.26 109.288 19.84 111.232 19.84C113.104 19.84 114.772 20.248 116.236 21.064C117.7 21.88 118.84 23.032 119.656 24.52C120.472 25.984 120.88 27.676 120.88 29.596ZM116.596 28.3C116.572 26.788 116.032 25.576 114.976 24.664C113.92 23.752 112.612 23.296 111.052 23.296C109.636 23.296 108.424 23.752 107.416 24.664C106.408 25.552 105.808 26.764 105.616 28.3H116.596Z" fill="#0071F2"/>
        <path id="d" d="M124.332 29.992C124.332 28 124.74 26.236 125.556 24.7C126.396 23.164 127.524 21.976 128.94 21.136C130.38 20.272 131.976 19.84 133.728 19.84C135.024 19.84 136.296 20.128 137.544 20.704C138.816 21.256 139.824 22 140.568 22.936V13.36H144.708V40H140.568V37.012C139.896 37.972 138.96 38.764 137.76 39.388C136.584 40.012 135.228 40.324 133.692 40.324C131.964 40.324 130.38 39.892 128.94 39.028C127.524 38.14 126.396 36.916 125.556 35.356C124.74 33.772 124.332 31.984 124.332 29.992ZM140.568 30.064C140.568 28.696 140.28 27.508 139.704 26.5C139.152 25.492 138.42 24.724 137.508 24.196C136.596 23.668 135.612 23.404 134.556 23.404C133.5 23.404 132.516 23.668 131.604 24.196C130.692 24.7 129.948 25.456 129.372 26.464C128.82 27.448 128.544 28.624 128.544 29.992C128.544 31.36 128.82 32.56 129.372 33.592C129.948 34.624 130.692 35.416 131.604 35.968C132.54 36.496 133.524 36.76 134.556 36.76C135.612 36.76 136.596 36.496 137.508 35.968C138.42 35.44 139.152 34.672 139.704 33.664C140.28 32.632 140.568 31.432 140.568 30.064Z" fill="#0071F2"/>
        <path id="m" d="M174.712 19.84C176.272 19.84 177.664 20.164 178.888 20.812C180.136 21.46 181.108 22.42 181.804 23.692C182.524 24.964 182.884 26.5 182.884 28.3V40H178.816V28.912C178.816 27.136 178.372 25.78 177.484 24.844C176.596 23.884 175.384 23.404 173.848 23.404C172.312 23.404 171.088 23.884 170.176 24.844C169.288 25.78 168.844 27.136 168.844 28.912V40H164.776V28.912C164.776 27.136 164.332 25.78 163.444 24.844C162.556 23.884 161.344 23.404 159.808 23.404C158.272 23.404 157.048 23.884 156.136 24.844C155.248 25.78 154.804 27.136 154.804 28.912V40H150.7V20.164H154.804V22.432C155.476 21.616 156.328 20.98 157.36 20.524C158.392 20.068 159.496 19.84 160.672 19.84C162.256 19.84 163.672 20.176 164.92 20.848C166.168 21.52 167.128 22.492 167.8 23.764C168.4 22.564 169.336 21.616 170.608 20.92C171.88 20.2 173.248 19.84 174.712 19.84Z" fill="#0071F2"/>
        <path id="a" d="M187.332 29.992C187.332 28 187.74 26.236 188.556 24.7C189.396 23.164 190.524 21.976 191.94 21.136C193.38 20.272 194.964 19.84 196.692 19.84C198.252 19.84 199.608 20.152 200.76 20.776C201.936 21.376 202.872 22.132 203.568 23.044V20.164H207.708V40H203.568V37.048C202.872 37.984 201.924 38.764 200.724 39.388C199.524 40.012 198.156 40.324 196.62 40.324C194.916 40.324 193.356 39.892 191.94 39.028C190.524 38.14 189.396 36.916 188.556 35.356C187.74 33.772 187.332 31.984 187.332 29.992ZM203.568 30.064C203.568 28.696 203.28 27.508 202.704 26.5C202.152 25.492 201.42 24.724 200.508 24.196C199.596 23.668 198.612 23.404 197.556 23.404C196.5 23.404 195.516 23.668 194.604 24.196C193.692 24.7 192.948 25.456 192.372 26.464C191.82 27.448 191.544 28.624 191.544 29.992C191.544 31.36 191.82 32.56 192.372 33.592C192.948 34.624 193.692 35.416 194.604 35.968C195.54 36.496 196.524 36.76 197.556 36.76C198.612 36.76 199.596 36.496 200.508 35.968C201.42 35.44 202.152 34.672 202.704 33.664C203.28 32.632 203.568 31.432 203.568 30.064Z" fill="#0071F2"/>
        {loupeId}
        <path id="khedmaAr" d="M80.7148 69.18C79.4188 69.18 78.2668 69 77.2588 68.64C76.2748 68.256 75.4828 67.62 74.8828 66.732C74.3068 65.82 73.9828 64.56 73.9108 62.952L73.3348 50.424H76.2508L76.8268 62.304C76.8988 63.432 77.1028 64.284 77.4388 64.86C77.7748 65.412 78.2428 65.784 78.8428 65.976C79.4668 66.144 80.2108 66.228 81.0748 66.228C81.5788 66.228 81.9388 66.372 82.1548 66.66C82.3948 66.924 82.5148 67.248 82.5148 67.632C82.5148 68.016 82.3468 68.376 82.0108 68.712C81.6748 69.024 81.2428 69.18 80.7148 69.18ZM75.2788 65.22C73.9108 65.652 72.5788 65.868 71.2828 65.868C69.9868 65.868 68.8108 65.676 67.7548 65.292C66.6988 64.908 65.8588 64.356 65.2348 63.636C64.6108 62.892 64.2988 62.004 64.2988 60.972C64.2988 59.964 64.5508 59.016 65.0548 58.128C65.5828 57.24 66.2908 56.448 67.1788 55.752C68.0908 55.056 69.1348 54.48 70.3108 54.024C71.5108 53.544 72.7828 53.22 74.1268 53.052L74.6308 56.076C73.4308 56.124 72.3628 56.292 71.4268 56.58C70.5148 56.844 69.7348 57.192 69.0868 57.624C68.4628 58.056 67.9828 58.524 67.6468 59.028C67.3108 59.532 67.1428 60.024 67.1428 60.504C67.1428 61.032 67.3348 61.464 67.7188 61.8C68.1028 62.136 68.5948 62.4 69.1948 62.592C69.7948 62.76 70.4548 62.868 71.1748 62.916C71.8948 62.94 72.5908 62.916 73.2628 62.844C73.9348 62.748 74.5108 62.616 74.9908 62.448L75.2788 65.22ZM74.5228 46.284C74.0188 46.284 73.5868 46.116 73.2268 45.78C72.8908 45.42 72.7227 45 72.7227 44.52C72.7227 44.04 72.8908 43.62 73.2268 43.26C73.5868 42.9 74.0188 42.72 74.5228 42.72C75.0028 42.72 75.4108 42.9 75.7468 43.26C76.1068 43.62 76.2868 44.04 76.2868 44.52C76.2868 45 76.1068 45.42 75.7468 45.78C75.4108 46.116 75.0028 46.284 74.5228 46.284ZM69.5908 46.284C69.0868 46.284 68.6548 46.116 68.2948 45.78C67.9588 45.42 67.7908 45 67.7908 44.52C67.7908 44.04 67.9588 43.62 68.2948 43.26C68.6548 42.9 69.0868 42.72 69.5908 42.72C70.0708 42.72 70.4788 42.9 70.8148 43.26C71.1748 43.62 71.3548 44.04 71.3548 44.52C71.3548 45 71.1748 45.42 70.8148 45.78C70.4788 46.116 70.0708 46.284 69.5908 46.284ZM80.7266 69.18L81.0866 66.228C81.7586 66.228 82.3226 66.084 82.7786 65.796C83.2346 65.508 83.6786 65.028 84.1106 64.356C84.5426 63.684 85.0106 62.784 85.5146 61.656C86.2106 60.12 86.8946 58.956 87.5666 58.164C88.2626 57.372 88.9466 56.832 89.6186 56.544C90.3146 56.256 90.9986 56.112 91.6706 56.112C92.4866 56.112 93.2426 56.328 93.9386 56.76C94.6346 57.168 95.2466 57.72 95.7746 58.416C96.3026 59.112 96.7106 59.88 96.9986 60.72C97.3106 61.536 97.4666 62.352 97.4666 63.168C97.4666 64.608 97.2146 65.76 96.7106 66.624C96.2066 67.464 95.5586 68.076 94.7666 68.46C93.9986 68.82 93.1946 69 92.3546 69C91.6106 69 90.6506 68.856 89.4746 68.568C88.3226 68.28 86.8586 67.548 85.0826 66.372L86.4866 64.104C87.6626 64.848 88.7186 65.364 89.6546 65.652C90.6146 65.916 91.4066 66.048 92.0306 66.048C92.7266 66.048 93.2786 65.952 93.6866 65.76C94.0946 65.544 94.3946 65.244 94.5866 64.86C94.7786 64.476 94.8746 64.044 94.8746 63.564C94.8746 62.868 94.7066 62.172 94.3706 61.476C94.0346 60.78 93.6026 60.204 93.0746 59.748C92.5706 59.292 92.0306 59.064 91.4546 59.064C91.0226 59.064 90.6026 59.184 90.1946 59.424C89.7866 59.664 89.3666 60.108 88.9346 60.756C88.5026 61.404 88.0106 62.34 87.4586 63.564C86.8826 64.86 86.3306 65.892 85.8026 66.66C85.2986 67.404 84.7826 67.956 84.2546 68.316C83.7266 68.676 83.1746 68.904 82.5986 69C82.0466 69.12 81.4226 69.18 80.7266 69.18ZM107.381 66.228C108.581 66.228 109.529 66.108 110.225 65.868C110.945 65.628 111.461 65.28 111.773 64.824C112.109 64.344 112.277 63.792 112.277 63.168C112.277 62.688 112.145 62.112 111.881 61.44C111.641 60.768 111.305 60.024 110.873 59.208C110.441 58.368 109.937 57.492 109.361 56.58C108.809 55.644 108.209 54.696 107.561 53.736L110.045 52.116C110.981 53.532 111.797 54.876 112.493 56.148C113.189 57.396 113.777 58.572 114.257 59.676C114.737 60.756 115.121 61.776 115.409 62.736C115.745 63.792 116.117 64.572 116.525 65.076C116.957 65.58 117.401 65.904 117.857 66.048C118.313 66.168 118.733 66.228 119.117 66.228C119.621 66.228 119.993 66.372 120.233 66.66C120.473 66.924 120.593 67.248 120.593 67.632C120.593 68.016 120.425 68.376 120.089 68.712C119.753 69.024 119.321 69.18 118.793 69.18C118.001 69.18 117.221 69.036 116.453 68.748C115.709 68.436 115.061 67.944 114.509 67.272C113.957 66.576 113.573 65.652 113.357 64.5L114.797 63.348C114.797 64.308 114.593 65.244 114.185 66.156C113.777 67.044 113.033 67.776 111.953 68.352C110.897 68.928 109.373 69.216 107.381 69.216C106.517 69.216 105.677 69.144 104.861 69C104.069 68.856 103.337 68.652 102.665 68.388C101.993 68.1 101.405 67.764 100.901 67.38L102.341 64.896C102.821 65.208 103.493 65.508 104.357 65.796C105.221 66.084 106.229 66.228 107.381 66.228ZM118.801 69.18L119.125 66.228C120.373 66.228 121.597 66.132 122.797 65.94C123.997 65.748 125.173 65.472 126.325 65.112C127.477 64.752 128.581 64.32 129.637 63.816C130.717 63.288 131.737 62.688 132.697 62.016C132.073 61.464 131.353 60.984 130.537 60.576C129.721 60.168 128.821 59.856 127.837 59.64C126.877 59.4 125.857 59.28 124.777 59.28C124.393 59.28 124.033 59.292 123.697 59.316C123.361 59.34 123.025 59.388 122.689 59.46C122.353 59.508 121.969 59.58 121.537 59.676L120.961 56.94C121.609 56.748 122.257 56.604 122.905 56.508C123.553 56.388 124.177 56.328 124.777 56.328C126.025 56.328 127.153 56.484 128.161 56.796C129.169 57.084 130.081 57.444 130.897 57.876C131.737 58.308 132.517 58.74 133.237 59.172C133.981 59.604 134.701 59.976 135.397 60.288C136.093 60.576 136.813 60.72 137.557 60.72H138.313L138.565 63.312C137.533 63.312 136.585 63.456 135.721 63.744C134.857 64.032 134.005 64.404 133.165 64.86C132.349 65.292 131.485 65.76 130.573 66.264C129.661 66.744 128.653 67.212 127.549 67.668C126.445 68.1 125.173 68.46 123.733 68.748C122.317 69.036 120.673 69.18 118.801 69.18ZM124.813 52.62C124.309 52.62 123.877 52.452 123.517 52.116C123.181 51.756 123.013 51.336 123.013 50.856C123.013 50.376 123.181 49.956 123.517 49.596C123.877 49.236 124.309 49.056 124.813 49.056C125.293 49.056 125.701 49.236 126.037 49.596C126.397 49.956 126.577 50.376 126.577 50.856C126.577 51.336 126.397 51.756 126.037 52.116C125.701 52.452 125.293 52.62 124.813 52.62Z" fill="#0071F2"/>
        <path id="hawes" d="M155.043 70.568C154.131 70.568 153.267 70.44 152.451 70.184C151.635 69.944 150.907 69.584 150.267 69.104C149.643 68.624 149.147 68.04 148.779 67.352C148.427 66.68 148.251 65.904 148.251 65.024C148.251 64.64 148.283 64.232 148.347 63.8C148.427 63.352 148.539 62.88 148.683 62.384C148.843 61.872 149.035 61.336 149.259 60.776L150.987 61.448C150.827 61.896 150.683 62.32 150.555 62.72C150.443 63.12 150.355 63.496 150.291 63.848C150.243 64.2 150.219 64.536 150.219 64.856C150.219 65.672 150.435 66.36 150.867 66.92C151.315 67.48 151.907 67.896 152.643 68.168C153.395 68.456 154.219 68.6 155.115 68.6C156.203 68.6 157.115 68.472 157.851 68.216C158.587 67.976 159.171 67.648 159.603 67.232C160.035 66.832 160.339 66.384 160.515 65.888C160.707 65.392 160.803 64.888 160.803 64.376C160.803 63.672 160.747 63.008 160.635 62.384C160.539 61.76 160.403 61.152 160.227 60.56C160.067 59.952 159.891 59.336 159.699 58.712L161.643 58.184C161.819 58.792 161.955 59.288 162.051 59.672C162.147 60.04 162.219 60.336 162.267 60.56C162.331 60.784 162.387 60.984 162.435 61.16C162.611 61.752 162.811 62.192 163.035 62.48C163.275 62.752 163.547 62.936 163.851 63.032C164.171 63.112 164.531 63.152 164.931 63.152C165.251 63.152 165.531 63.112 165.771 63.032C166.027 62.952 166.259 62.76 166.467 62.456C166.691 62.152 166.883 61.664 167.043 60.992C167.219 60.32 167.379 59.4 167.523 58.232L169.347 58.568C169.299 58.856 169.243 59.208 169.179 59.624C169.115 60.04 169.051 60.456 168.987 60.872C168.939 61.272 168.915 61.608 168.915 61.88C168.915 62.104 168.963 62.32 169.059 62.528C169.171 62.72 169.379 62.872 169.683 62.984C170.003 63.096 170.475 63.152 171.099 63.152C171.595 63.152 172.019 63.12 172.371 63.056C172.739 62.976 173.019 62.792 173.211 62.504C173.419 62.2 173.523 61.728 173.523 61.088C173.523 60.688 173.459 60.216 173.331 59.672C173.203 59.112 173.035 58.52 172.827 57.896C172.619 57.272 172.395 56.656 172.155 56.048L174.099 55.328C174.307 55.84 174.499 56.424 174.675 57.08C174.867 57.736 175.027 58.384 175.155 59.024C175.283 59.664 175.347 60.224 175.347 60.704C175.347 61.52 175.235 62.208 175.011 62.768C174.803 63.328 174.507 63.784 174.123 64.136C173.739 64.488 173.283 64.744 172.755 64.904C172.243 65.048 171.683 65.12 171.075 65.12C170.515 65.12 170.027 65.072 169.611 64.976C169.211 64.88 168.867 64.736 168.579 64.544C168.307 64.336 168.091 64.08 167.931 63.776C167.787 63.456 167.683 63.088 167.619 62.672H168.435C168.179 63.248 167.891 63.72 167.571 64.088C167.251 64.44 166.867 64.704 166.419 64.88C165.987 65.04 165.451 65.12 164.811 65.12C164.315 65.12 163.891 65.056 163.539 64.928C163.187 64.784 162.891 64.608 162.651 64.4C162.427 64.176 162.251 63.928 162.123 63.656C161.995 63.368 161.899 63.08 161.835 62.792L162.819 64.016C162.739 64.784 162.563 65.552 162.291 66.32C162.035 67.088 161.619 67.792 161.043 68.432C160.483 69.088 159.715 69.608 158.739 69.992C157.763 70.376 156.531 70.568 155.043 70.568ZM177.939 70.52L177.507 68.552C178.467 68.424 179.347 68.24 180.147 68C180.963 67.776 181.659 67.448 182.235 67.016C182.827 66.584 183.283 66.016 183.603 65.312C183.923 64.608 184.083 63.728 184.083 62.672C184.083 61.584 183.883 60.68 183.483 59.96C183.083 59.24 182.563 58.88 181.923 58.88C181.587 58.88 181.275 59.008 180.987 59.264C180.699 59.52 180.459 59.864 180.267 60.296C180.091 60.728 180.003 61.2 180.003 61.712C180.003 62 180.067 62.24 180.195 62.432C180.323 62.608 180.507 62.752 180.747 62.864C181.003 62.96 181.323 63.032 181.707 63.08C182.091 63.128 182.539 63.152 183.051 63.152H188.115C188.451 63.152 188.691 63.248 188.835 63.44C188.995 63.616 189.075 63.832 189.075 64.088C189.075 64.344 188.963 64.584 188.739 64.808C188.515 65.016 188.227 65.12 187.875 65.12H182.139C181.419 65.12 180.747 65.016 180.123 64.808C179.515 64.6 179.019 64.28 178.635 63.848C178.267 63.4 178.083 62.816 178.083 62.096C178.083 61.424 178.187 60.784 178.395 60.176C178.603 59.552 178.883 59 179.235 58.52C179.603 58.024 180.027 57.632 180.507 57.344C181.003 57.056 181.539 56.912 182.115 56.912C182.851 56.912 183.507 57.128 184.083 57.56C184.659 57.992 185.115 58.648 185.451 59.528C185.787 60.392 185.955 61.488 185.955 62.816C185.955 64.304 185.651 65.584 185.043 66.656C184.451 67.744 183.555 68.608 182.355 69.248C181.171 69.888 179.699 70.312 177.939 70.52ZM187.867 65.12L188.083 63.152C188.915 63.152 189.731 63.088 190.531 62.96C191.331 62.832 192.115 62.648 192.883 62.408C193.651 62.168 194.387 61.88 195.091 61.544C195.811 61.192 196.491 60.792 197.131 60.344C196.715 59.976 196.235 59.656 195.691 59.384C195.147 59.112 194.547 58.904 193.891 58.76C193.251 58.6 192.571 58.52 191.851 58.52C191.595 58.52 191.355 58.528 191.131 58.544C190.907 58.56 190.683 58.592 190.459 58.64C190.235 58.672 189.979 58.72 189.691 58.784L189.307 56.96C189.739 56.832 190.171 56.736 190.603 56.672C191.035 56.592 191.451 56.552 191.851 56.552C192.683 56.552 193.435 56.656 194.107 56.864C194.779 57.056 195.387 57.296 195.931 57.584C196.491 57.872 197.011 58.16 197.491 58.448C197.987 58.736 198.467 58.984 198.931 59.192C199.395 59.384 199.875 59.48 200.371 59.48H200.875L201.043 61.208C200.355 61.208 199.723 61.304 199.147 61.496C198.571 61.688 198.003 61.936 197.443 62.24C196.899 62.528 196.323 62.84 195.715 63.176C195.107 63.496 194.435 63.808 193.699 64.112C192.963 64.4 192.115 64.64 191.155 64.832C190.211 65.024 189.115 65.12 187.867 65.12Z" fill="#FFA73B"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use  href="#image0_520_346" transform="matrix(0.00812147 0 0 0.0104167 0.110169 0)"/>
        </pattern>
        <image id="image0_520_346" width="116" height="126" y="-20" href={Searchloupe}/>
        </defs>
        </svg>
    </div>
  )
}
