import { Link } from 'react-router-dom'
const Navbar = ({auth}) => {
    
    return (  
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <svg className="kat" preserveAspectRatio viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.765 48.3399C17.9256 50.4365 22.5066 51.5647 27.165 51.6399H27.9C32.5814 51.6535 37.2065 50.6188 41.436 48.6119C45.3385 46.7731 48.7387 44.0182 51.347 40.5819C54.26 36.6558 55.8223 31.8916 55.8 27.0029V4.0149C55.8015 3.52212 55.6819 3.03653 55.4517 2.6008C55.2215 2.16508 54.8878 1.79258 54.4799 1.51606C54.0721 1.23953 53.6025 1.06744 53.1125 1.01493C52.6225 0.962419 52.1272 1.03109 51.67 1.2149L41.2 5.5749C40.5132 5.86493 39.7415 5.88139 39.043 5.6209C35.4873 4.25779 31.7078 3.57297 27.9 3.6019C24.0917 3.59467 20.3138 4.27876 16.75 5.6209C16.0514 5.88139 15.2797 5.86493 14.593 5.5749L4.12996 1.3539C3.67301 1.1654 3.17647 1.09313 2.68475 1.14356C2.19303 1.19398 1.72148 1.36552 1.3123 1.64283C0.903124 1.92014 0.569077 2.29457 0.340056 2.73261C0.111035 3.17065 -0.00581592 3.65864 -3.99598e-05 4.1529V27.5999C0.0168096 32.1281 1.44431 36.5386 4.08396 40.2179C6.61719 43.6584 9.93651 46.4432 13.765 48.3399ZM38.084 27.0949C38.9914 27.0941 39.8787 27.3624 40.6336 27.8659C41.3885 28.3694 41.9772 29.0854 42.3252 29.9235C42.6732 30.7615 42.7648 31.6839 42.5886 32.574C42.4123 33.4642 41.9761 34.2821 41.335 34.9243C40.6939 35.5665 39.8768 36.0042 38.987 36.182C38.0971 36.3598 37.1746 36.2697 36.3359 35.9232C35.4973 35.5767 34.7802 34.9892 34.2754 34.2352C33.7706 33.4811 33.5008 32.5943 33.5 31.6869C33.5021 30.4711 33.9854 29.3055 34.8444 28.445C35.7034 27.5845 36.8681 27.0991 38.084 27.0949ZM17.711 27.0949C18.6182 27.0949 19.5051 27.3639 20.2595 27.8678C21.0139 28.3718 21.602 29.0881 21.9493 29.9262C22.2967 30.7643 22.3878 31.6866 22.2111 32.5765C22.0344 33.4664 21.5978 34.2839 20.9566 34.9257C20.3153 35.5675 19.4982 36.0048 18.6085 36.1823C17.7188 36.3597 16.7964 36.2694 15.958 35.9228C15.1196 35.5762 14.4027 34.9887 13.8981 34.2348C13.3935 33.4808 13.1238 32.5941 13.123 31.6869C13.1251 30.4704 13.609 29.3042 14.4688 28.4436C15.3287 27.583 16.4944 27.0981 17.711 27.0949Z" fill="#2BA7F3"/>
</svg>
                    <div className="text">Kat</div>
                </div>
                <div className="text"> <Link style={{ textDecoration: 'none',color:'white' }} to='/'>Home</Link> </div>
                <div className="text"><Link style={{ textDecoration: 'none',color:'white' }} to='/about'>About</Link> </div>
                {auth.status && 
                <div className="text"><Link style={{ textDecoration: 'none',color:'white' }} to='/logout'>Logout</Link> </div>
}
                
            </div>
            
            <div className="middle">
                <div className="search">
                    <svg className="s" preserveAspectRatio viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.618 0C10.1224 0 7.68284 0.740033 5.60782 2.12652C3.5328 3.513 1.91552 5.48366 0.960494 7.7893C0.00546718 10.0949 -0.244411 12.632 0.242457 15.0796C0.729325 17.5273 1.93107 19.7756 3.69573 21.5403C5.46039 23.3049 7.7087 24.5067 10.1564 24.9935C12.604 25.4804 15.1411 25.2305 17.4467 24.2755C19.7523 23.3205 21.723 21.7032 23.1095 19.6282C24.496 17.5532 25.236 15.1136 25.236 12.618C25.2323 9.27264 23.9017 6.06535 21.5362 3.69982C19.1707 1.33429 15.9634 0.00370561 12.618 0V0ZM12.618 22.906C10.5832 22.906 8.59415 22.3026 6.9023 21.1722C5.21045 20.0417 3.89181 18.4349 3.11313 16.555C2.33446 14.6752 2.13072 12.6066 2.52769 10.6109C2.92465 8.61523 3.90449 6.78209 5.34329 5.34329C6.78209 3.90448 8.61524 2.92465 10.6109 2.52768C12.6066 2.13072 14.6752 2.33445 16.5551 3.11313C18.4349 3.8918 20.0417 5.21044 21.1722 6.90229C22.3026 8.59415 22.906 10.5832 22.906 12.618C22.9028 15.3456 21.8179 17.9605 19.8892 19.8892C17.9605 21.8179 15.3456 22.9028 12.618 22.906Z" fill="white"/>
<path d="M28.311 26.664L21.633 19.986C21.5259 19.8732 21.3973 19.783 21.2548 19.7206C21.1123 19.6583 20.9588 19.6252 20.8032 19.6231C20.6477 19.6211 20.4933 19.6503 20.3493 19.7088C20.2052 19.7674 20.0743 19.8543 19.9643 19.9643C19.8543 20.0743 19.7674 20.2052 19.7088 20.3493C19.6503 20.4933 19.6211 20.6477 19.6231 20.8032C19.6252 20.9588 19.6583 21.1123 19.7206 21.2548C19.783 21.3973 19.8732 21.5259 19.986 21.633L26.664 28.311C26.8843 28.5201 27.1775 28.6349 27.4812 28.631C27.7849 28.627 28.0751 28.5046 28.2898 28.2898C28.5046 28.0751 28.627 27.7849 28.631 27.4812C28.6349 27.1775 28.5201 26.8843 28.311 26.664Z" fill="white"/>
</svg>
                    <div className="text">Search on Kat</div>
                </div>
            </div>
            {auth.status ? <div className="right">
                <div className="text">Hey, {auth.user.username}</div>
                
                <svg className="profile" preserveAspectRatio viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.5 5.50523e-06C27.9562 -0.00369158 21.5464 1.85479 16.0195 5.35834C10.4926 8.86189 6.07673 13.8658 3.28783 19.7856C0.498928 25.7054 -0.547872 32.2965 0.269718 38.7891C1.08731 45.2816 3.73553 51.4075 7.90501 56.451C7.91801 56.468 7.91901 56.49 7.93301 56.506C11.4389 60.7379 15.9053 64.0707 20.96 66.227L21.131 66.302C21.531 66.472 21.943 66.63 22.352 66.784C22.513 66.845 22.674 66.907 22.837 66.966C23.1903 67.0927 23.5457 67.213 23.903 67.327C24.132 67.401 24.361 67.473 24.592 67.542C24.908 67.636 25.2257 67.7263 25.545 67.813C25.826 67.889 26.108 67.959 26.391 68.027C26.674 68.095 26.965 68.165 27.254 68.227C27.576 68.296 27.901 68.357 28.228 68.417C28.49 68.465 28.751 68.517 29.016 68.558C29.378 68.617 29.743 68.658 30.108 68.71C30.344 68.74 30.578 68.774 30.815 68.8C31.229 68.844 31.646 68.875 32.065 68.9C32.259 68.914 32.453 68.935 32.648 68.945C33.26 68.9817 33.8773 69 34.5 69C35.122 69 35.74 68.982 36.353 68.949C36.553 68.939 36.742 68.918 36.936 68.904C37.355 68.874 37.772 68.844 38.186 68.804C38.423 68.779 38.658 68.744 38.893 68.714C39.259 68.667 39.623 68.621 39.986 68.562C40.249 68.519 40.512 68.469 40.774 68.421C41.099 68.361 41.425 68.3 41.748 68.231C42.037 68.169 42.323 68.101 42.61 68.031C42.897 67.961 43.176 67.892 43.456 67.817C43.776 67.732 44.093 67.64 44.409 67.546C44.64 67.477 44.869 67.405 45.098 67.331C45.4553 67.2163 45.8107 67.096 46.164 66.97C46.326 66.911 46.487 66.849 46.649 66.788C47.06 66.634 47.467 66.475 47.87 66.306L48.041 66.231C53.0964 64.0744 57.5634 60.7412 61.07 56.509C61.084 56.493 61.085 56.47 61.098 56.454C65.2669 51.4098 67.9145 45.2836 68.7316 38.7909C69.5487 32.2982 68.5015 25.707 65.7125 19.7872C62.9234 13.8674 58.5075 8.86334 52.9806 5.35956C47.4537 1.85577 41.0439 -0.00311861 34.5 5.50523e-06ZM48.481 63.5L48.43 63.525C48.019 63.725 47.602 63.909 47.181 64.091L46.896 64.213C46.528 64.367 46.1563 64.5137 45.781 64.653C45.625 64.712 45.468 64.769 45.311 64.824C44.979 64.942 44.645 65.056 44.311 65.164C44.102 65.231 43.891 65.294 43.681 65.356C43.381 65.446 43.081 65.532 42.781 65.612C42.526 65.68 42.268 65.742 42.011 65.803C41.754 65.864 41.472 65.933 41.199 65.99C40.899 66.053 40.599 66.107 40.299 66.161C40.056 66.206 39.815 66.253 39.57 66.292C39.233 66.345 38.893 66.392 38.553 66.43C38.338 66.458 38.124 66.49 37.907 66.513C37.519 66.554 37.128 66.581 36.739 66.613C36.565 66.624 36.393 66.644 36.217 66.653C35.6477 66.683 35.077 66.6983 34.505 66.699C33.933 66.6997 33.3627 66.6843 32.794 66.653C32.619 66.644 32.447 66.625 32.272 66.613C31.881 66.587 31.491 66.559 31.104 66.513C30.887 66.49 30.673 66.458 30.458 66.43C30.119 66.387 29.778 66.345 29.441 66.292C29.196 66.253 28.955 66.206 28.712 66.161C28.412 66.107 28.112 66.052 27.812 65.99C27.539 65.932 27.269 65.867 27 65.803C26.731 65.739 26.485 65.68 26.229 65.612C25.929 65.532 25.629 65.444 25.329 65.356C25.119 65.294 24.908 65.231 24.699 65.164C24.3623 65.056 24.029 64.9427 23.699 64.824C23.541 64.768 23.385 64.71 23.229 64.653C22.8543 64.513 22.4823 64.3663 22.113 64.213C22.013 64.174 21.924 64.132 21.829 64.092C21.408 63.911 20.991 63.724 20.579 63.526L20.528 63.501C16.5356 61.5638 12.9843 58.8261 10.095 55.458C11.2072 51.4096 13.3063 47.7002 16.2043 44.6623C19.1022 41.6244 22.7085 39.3528 26.7 38.051C26.86 38.151 27.027 38.236 27.191 38.328C27.291 38.382 27.383 38.44 27.481 38.491C27.824 38.673 28.171 38.843 28.526 38.991C28.799 39.111 29.08 39.212 29.361 39.315L29.527 39.376C32.7413 40.5336 36.2587 40.5336 39.473 39.376L39.639 39.315C39.92 39.215 40.201 39.115 40.474 38.991C40.829 38.838 41.174 38.668 41.519 38.491C41.619 38.438 41.712 38.382 41.809 38.328C41.973 38.236 42.141 38.149 42.302 38.05C46.2947 39.3518 49.9021 41.6237 52.8011 44.6621C55.7001 47.7005 57.8001 51.4106 58.913 55.46C56.023 58.8262 52.4723 61.5628 48.481 63.5ZM21.85 25.3C21.8476 23.1066 22.4155 20.9501 23.4981 19.0425C24.5806 17.1348 26.1407 15.5414 28.025 14.4186C29.9093 13.2959 32.0532 12.6824 34.2462 12.6384C36.4392 12.5944 38.606 13.1214 40.5339 14.1676C42.4617 15.2139 44.0844 16.7434 45.2426 18.6061C46.4009 20.4689 47.0548 22.6007 47.1404 24.7925C47.2259 26.9843 46.7401 29.1607 45.7305 31.108C44.721 33.0553 43.2225 34.7067 41.382 35.9C40.9303 36.1935 40.4596 36.4568 39.973 36.688C39.915 36.716 39.859 36.744 39.802 36.771C38.1353 37.5194 36.329 37.9063 34.502 37.9063C32.675 37.9063 30.8687 37.5194 29.202 36.771C29.145 36.745 29.087 36.716 29.031 36.688C28.5443 36.457 28.0736 36.1938 27.622 35.9C25.8524 34.7545 24.3974 33.1846 23.3893 31.3333C22.3812 29.482 21.8521 27.408 21.85 25.3ZM60.638 53.271C59.336 49.4524 57.2158 45.9642 54.4256 43.0502C51.6354 40.1361 48.2425 37.8665 44.484 36.4C46.7366 34.3793 48.323 31.7227 49.0335 28.7812C49.7441 25.8397 49.5453 22.7518 48.4634 19.9257C47.3816 17.0996 45.4677 14.6683 42.9746 12.9531C40.4815 11.2379 37.5266 10.3197 34.5005 10.3197C31.4744 10.3197 28.5195 11.2379 26.0264 12.9531C23.5334 14.6683 21.6194 17.0996 20.5376 19.9257C19.4557 22.7518 19.257 25.8397 19.9675 28.7812C20.678 31.7227 22.2644 34.3793 24.517 36.4C20.7586 37.8667 17.3659 40.1364 14.5757 43.0504C11.7855 45.9644 9.66523 49.4525 8.36301 53.271C5.40365 49.1507 3.45998 44.3892 2.69049 39.3749C1.921 34.3607 2.34749 29.2355 3.93517 24.4174C5.52285 19.5992 8.22677 15.2245 11.8265 11.65C15.4262 8.07544 19.8197 5.40225 24.6488 3.84839C29.478 2.29452 34.606 1.90397 39.6148 2.70859C44.6235 3.51321 49.3712 5.49021 53.4707 8.47838C57.5702 11.4666 60.9055 15.3813 63.2045 19.9034C65.5035 24.4256 66.7013 29.427 66.7 34.5C66.7051 41.239 64.5838 47.8079 60.638 53.271Z" fill="#2BA7F3"/>
</svg>
                <Link to='create'><svg className="add" onClick={() =>{}} preserveAspectRatio viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.5 0C27.6766 0 21.0063 2.02339 15.3328 5.8143C9.65935 9.60521 5.2374 14.9934 2.62617 21.2974C0.0149481 27.6015 -0.668267 34.5383 0.662923 41.2306C1.99411 47.923 5.27992 54.0703 10.1048 58.8952C14.9297 63.7201 21.0771 67.0059 27.7694 68.3371C34.4617 69.6683 41.3985 68.9851 47.7026 66.3738C54.0066 63.7626 59.3948 59.3407 63.1857 53.6672C66.9766 47.9937 69 41.3235 69 34.5C68.99 25.3531 65.3519 16.5838 58.8841 10.1159C52.4163 3.6481 43.6469 0.0100582 34.5 0V0Z" fill="#2BA7F3"/>
<path d="M48.714 36.87H36.87V48.713C36.87 49.452 36.5764 50.1608 36.0538 50.6833C35.5313 51.2059 34.8225 51.4995 34.0835 51.4995C33.3444 51.4995 32.6357 51.2059 32.1131 50.6833C31.5906 50.1608 31.297 49.452 31.297 48.713V36.87H19.454C18.715 36.87 18.0062 36.5764 17.4836 36.0538C16.9611 35.5313 16.6675 34.8225 16.6675 34.0835C16.6675 33.3444 16.9611 32.6357 17.4836 32.1131C18.0062 31.5906 18.715 31.297 19.454 31.297H31.3V19.454C31.3 18.715 31.5936 18.0062 32.1161 17.4836C32.6387 16.9611 33.3475 16.6675 34.0865 16.6675C34.8255 16.6675 35.5343 16.9611 36.0568 17.4836C36.5794 18.0062 36.873 18.715 36.873 19.454V31.3H48.716C49.455 31.3 50.1638 31.5936 50.6863 32.1161C51.2089 32.6387 51.5025 33.3475 51.5025 34.0865C51.5025 34.8255 51.2089 35.5343 50.6863 36.0568C50.1638 36.5794 49.455 36.873 48.716 36.873L48.714 36.87Z" fill="#FAFAFA"/>
</svg></Link>
                

            </div> : <div className='right'>
            <div className="text"><Link style={{ textDecoration: 'none',color:'white' }} to='/login'>Log In</Link></div>
            <div className="text"><Link style={{ textDecoration: 'none',color:'white' }} to='signup'>Sign Up</Link></div>

            </div>
            }
            
              
        </div>
    );
}
 
export default Navbar;