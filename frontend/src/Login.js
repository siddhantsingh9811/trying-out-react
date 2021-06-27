import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Login = ({auth,handleUser}) => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // console.log(auth,handleUser)
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(username,password)
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: username,
                password: password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                // console.log('User profile', response.data.user);
                // console.log('User token', response.data.jwt);
                localStorage.setItem("token", response.data.jwt);
                handleUser(response.data.jwt,response.data.user,true)
                history.push('/');
                
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
		
    }


    return (  
        <div className="login">
            <div className="box">
                <div className="logo">
                    <svg className="kat" preserveAspectRatio viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.765 48.3399C17.9256 50.4365 22.5066 51.5647 27.165 51.6399H27.9C32.5814 51.6535 37.2065 50.6188 41.436 48.6119C45.3385 46.7731 48.7387 44.0182 51.347 40.5819C54.26 36.6558 55.8223 31.8916 55.8 27.0029V4.0149C55.8015 3.52212 55.6819 3.03653 55.4517 2.6008C55.2215 2.16508 54.8878 1.79258 54.4799 1.51606C54.0721 1.23953 53.6025 1.06744 53.1125 1.01493C52.6225 0.962419 52.1272 1.03109 51.67 1.2149L41.2 5.5749C40.5132 5.86493 39.7415 5.88139 39.043 5.6209C35.4873 4.25779 31.7078 3.57297 27.9 3.6019C24.0917 3.59467 20.3138 4.27876 16.75 5.6209C16.0514 5.88139 15.2797 5.86493 14.593 5.5749L4.12996 1.3539C3.67301 1.1654 3.17647 1.09313 2.68475 1.14356C2.19303 1.19398 1.72148 1.36552 1.3123 1.64283C0.903124 1.92014 0.569077 2.29457 0.340056 2.73261C0.111035 3.17065 -0.00581592 3.65864 -3.99598e-05 4.1529V27.5999C0.0168096 32.1281 1.44431 36.5386 4.08396 40.2179C6.61719 43.6584 9.93651 46.4432 13.765 48.3399ZM38.084 27.0949C38.9914 27.0941 39.8787 27.3624 40.6336 27.8659C41.3885 28.3694 41.9772 29.0854 42.3252 29.9235C42.6732 30.7615 42.7648 31.6839 42.5886 32.574C42.4123 33.4642 41.9761 34.2821 41.335 34.9243C40.6939 35.5665 39.8768 36.0042 38.987 36.182C38.0971 36.3598 37.1746 36.2697 36.3359 35.9232C35.4973 35.5767 34.7802 34.9892 34.2754 34.2352C33.7706 33.4811 33.5008 32.5943 33.5 31.6869C33.5021 30.4711 33.9854 29.3055 34.8444 28.445C35.7034 27.5845 36.8681 27.0991 38.084 27.0949ZM17.711 27.0949C18.6182 27.0949 19.5051 27.3639 20.2595 27.8678C21.0139 28.3718 21.602 29.0881 21.9493 29.9262C22.2967 30.7643 22.3878 31.6866 22.2111 32.5765C22.0344 33.4664 21.5978 34.2839 20.9566 34.9257C20.3153 35.5675 19.4982 36.0048 18.6085 36.1823C17.7188 36.3597 16.7964 36.2694 15.958 35.9228C15.1196 35.5762 14.4027 34.9887 13.8981 34.2348C13.3935 33.4808 13.1238 32.5941 13.123 31.6869C13.1251 30.4704 13.609 29.3042 14.4688 28.4436C15.3287 27.583 16.4944 27.0981 17.711 27.0949Z" fill="#2BA7F3"/>
</svg>
                    <div className="text">Kat</div>
                </div>
                <center>

                
                <div className="h">Log In</div>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="field u">
                    <svg className='ic' preserveAspectRatio viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4998 2.15416e-06C10.9393 -0.00144449 8.43115 0.725767 6.26851 2.09668C4.10586 3.46759 2.37797 5.4256 1.2867 7.74197C0.195418 10.0583 -0.214188 12.6374 0.10573 15.1779C0.425647 17.7184 1.46188 20.1154 3.09337 22.0889C3.09845 22.0955 3.09885 22.1041 3.10432 22.1104C4.47616 23.7663 6.22381 25.0704 8.2017 25.9142L8.26861 25.9435C8.42513 26.01 8.58634 26.0719 8.74638 26.1321C8.80938 26.156 8.87238 26.1803 8.93616 26.2033C9.07441 26.2529 9.21345 26.3 9.35328 26.3446C9.44288 26.3736 9.53249 26.4017 9.62288 26.4287C9.74652 26.4655 9.87083 26.5009 9.99578 26.5348C10.1057 26.5645 10.2161 26.5919 10.3268 26.6185C10.4375 26.6451 10.5514 26.6725 10.6645 26.6968C10.7905 26.7238 10.9177 26.7476 11.0456 26.7711C11.1481 26.7899 11.2503 26.8102 11.354 26.8263C11.4956 26.8494 11.6384 26.8654 11.7812 26.8858C11.8736 26.8975 11.9652 26.9108 12.0579 26.921C12.2199 26.9382 12.3831 26.9503 12.547 26.9601C12.6229 26.9656 12.6988 26.9738 12.7751 26.9777C13.0146 26.9921 13.2562 26.9992 13.4998 26.9992C13.7432 26.9992 13.985 26.9922 14.2249 26.9793C14.3031 26.9754 14.3771 26.9671 14.453 26.9617C14.617 26.9499 14.7801 26.9382 14.9421 26.9225C15.0349 26.9128 15.1268 26.8991 15.2188 26.8873C15.362 26.8689 15.5044 26.8509 15.6464 26.8278C15.7494 26.811 15.8523 26.7915 15.9548 26.7727C16.082 26.7492 16.2095 26.7253 16.3359 26.6983C16.449 26.6741 16.5609 26.6475 16.6732 26.6201C16.7855 26.5927 16.8947 26.5657 17.0042 26.5363C17.1294 26.5031 17.2535 26.4671 17.3771 26.4303C17.4675 26.4033 17.5571 26.3751 17.6467 26.3462C17.7866 26.3013 17.9256 26.2542 18.0639 26.2049C18.1272 26.1818 18.1902 26.1576 18.2536 26.1337C18.4144 26.0734 18.5737 26.0112 18.7314 25.9451L18.7983 25.9157C20.7765 25.0719 22.5244 23.7676 23.8965 22.1116C23.9019 22.1053 23.9023 22.0963 23.9074 22.0901C25.5387 20.1163 26.5747 17.7192 26.8944 15.1786C27.2141 12.6381 26.8044 10.059 25.713 7.74259C24.6217 5.42621 22.8938 3.46816 20.7311 2.09716C18.5685 0.726151 16.0604 -0.00122029 13.4998 2.15416e-06ZM18.9705 24.8471L18.9505 24.8569C18.7897 24.9352 18.6265 25.0072 18.4618 25.0784L18.3503 25.1261C18.2063 25.1864 18.0609 25.2438 17.914 25.2983C17.8529 25.3214 17.7915 25.3437 17.7301 25.3652C17.6002 25.4114 17.4695 25.456 17.3388 25.4982C17.257 25.5244 17.1744 25.5491 17.0923 25.5734C16.9749 25.6086 16.8575 25.6422 16.7401 25.6735C16.6403 25.7001 16.5394 25.7244 16.4388 25.7483C16.3382 25.7721 16.2279 25.7991 16.1211 25.8214C16.0037 25.8461 15.8863 25.8672 15.7689 25.8883C15.6738 25.906 15.5795 25.9243 15.4837 25.9396C15.3518 25.9603 15.2188 25.9787 15.0857 25.9936C15.0016 26.0046 14.9179 26.0171 14.8329 26.0261C14.6811 26.0421 14.5281 26.0527 14.3759 26.0652C14.3078 26.0695 14.2405 26.0773 14.1717 26.0809C13.9489 26.0926 13.7256 26.0986 13.5018 26.0989C13.2779 26.0991 13.0548 26.0931 12.8323 26.0809C12.7638 26.0773 12.6965 26.0699 12.628 26.0652C12.475 26.055 12.3224 26.0441 12.171 26.0261C12.0861 26.0171 12.0023 26.0046 11.9182 25.9936C11.7856 25.9768 11.6521 25.9603 11.5203 25.9396C11.4244 25.9243 11.3301 25.906 11.235 25.8883C11.1176 25.8672 11.0002 25.8457 10.8828 25.8214C10.776 25.7987 10.6704 25.7733 10.5651 25.7483C10.4599 25.7232 10.3636 25.7001 10.2634 25.6735C10.146 25.6422 10.0286 25.6078 9.91126 25.5734C9.82909 25.5491 9.74652 25.5244 9.66474 25.4982C9.53301 25.456 9.40258 25.4116 9.27345 25.3652C9.21163 25.3433 9.15059 25.3206 9.08954 25.2983C8.94294 25.2435 8.79738 25.1861 8.65286 25.1261C8.61373 25.1108 8.57891 25.0944 8.54173 25.0788C8.377 25.0079 8.21383 24.9348 8.05262 24.8573L8.03266 24.8475C6.47046 24.0895 5.08087 23.0182 3.9503 21.7003C4.38551 20.1162 5.20687 18.6648 6.34082 17.4761C7.47476 16.2873 8.88587 15.3985 10.4477 14.8891C10.5103 14.9282 10.5757 14.9615 10.6398 14.9975C10.679 15.0186 10.715 15.0413 10.7533 15.0613C10.8875 15.1325 11.0233 15.199 11.1622 15.2569C11.269 15.3039 11.379 15.3434 11.489 15.3837L11.5539 15.4076C12.8116 15.8605 14.188 15.8605 15.4457 15.4076L15.5107 15.3837C15.6206 15.3446 15.7306 15.3054 15.8374 15.2569C15.9763 15.197 16.1113 15.1305 16.2463 15.0613C16.2854 15.0405 16.3218 15.0186 16.3598 14.9975C16.4239 14.9615 16.4897 14.9274 16.5527 14.8887C18.115 15.3981 19.5265 16.2871 20.6609 17.476C21.7952 18.6649 22.617 20.1166 23.0524 21.7011C21.9216 23.0183 20.5322 24.0891 18.9705 24.8471ZM8.54995 9.89972C8.54899 9.04143 8.77122 8.19765 9.19482 7.45118C9.61843 6.70472 10.2288 6.08123 10.9662 5.6419C11.7035 5.20258 12.5424 4.96253 13.4005 4.94531C14.2586 4.9281 15.1065 5.1343 15.8608 5.54369C16.6152 5.95308 17.2501 6.55158 17.7033 7.28045C18.1565 8.00932 18.4124 8.84351 18.4459 9.70114C18.4794 10.5588 18.2893 11.4104 17.8942 12.1723C17.4992 12.9343 16.9128 13.5805 16.1927 14.0474C16.0159 14.1623 15.8317 14.2653 15.6414 14.3558C15.6187 14.3667 15.5967 14.3777 15.5744 14.3882C14.9223 14.6811 14.2155 14.8325 13.5006 14.8325C12.7857 14.8325 12.0789 14.6811 11.4267 14.3882C11.4044 14.3781 11.3817 14.3667 11.3598 14.3558C11.1694 14.2654 10.9852 14.1624 10.8085 14.0474C10.1161 13.5992 9.54673 12.9849 9.15228 12.2605C8.75782 11.5361 8.55076 10.7246 8.54995 9.89972ZM23.7274 20.8446C23.2179 19.3504 22.3883 17.9855 21.2965 16.8452C20.2048 15.705 18.8771 14.8169 17.4065 14.2431C18.2879 13.4524 18.9086 12.4129 19.1867 11.2619C19.4647 10.1109 19.3869 8.90262 18.9636 7.79678C18.5403 6.69094 17.7914 5.73959 16.8158 5.06846C15.8403 4.39733 14.6841 4.03802 13.5 4.03802C12.3159 4.03802 11.1597 4.39733 10.1842 5.06846C9.20863 5.73959 8.45972 6.69094 8.0364 7.79678C7.61309 8.90262 7.53531 10.1109 7.81333 11.2619C8.09136 12.4129 8.71211 13.4524 9.59353 14.2431C8.12291 14.817 6.79533 15.7051 5.70355 16.8453C4.61178 17.9856 3.78213 19.3504 3.27258 20.8446C2.1146 19.2323 1.35406 17.3692 1.05296 15.4071C0.751867 13.4451 0.918747 11.4396 1.54 9.55435C2.16124 7.66904 3.21927 5.95726 4.6278 4.55856C6.03634 3.15987 7.7555 2.11386 9.64511 1.50585C11.5347 0.897831 13.5413 0.745012 15.5012 1.05985C17.4611 1.37469 19.3188 2.14828 20.9229 3.31753C22.527 4.48679 23.8321 6.0186 24.7317 7.78808C25.6313 9.55756 26.0999 11.5146 26.0994 13.4996C26.1014 16.1366 25.2714 18.7069 23.7274 20.8446Z" fill="#2BA7F3"/>
</svg>

                    <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="field p">
                    <svg className = 'ic' preserveAspectRatio viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="13.5" r="13" stroke="#2BA7F3"/>
<path d="M13.861 4.586C15.5583 4.586 17.072 4.94067 18.402 5.65C19.7447 6.34667 20.7897 7.33467 21.537 8.614C22.2843 9.88067 22.658 11.331 22.658 12.965C22.658 14.5737 22.3793 15.834 21.822 16.746C21.2647 17.6453 20.492 18.095 19.504 18.095C18.8833 18.095 18.3767 17.9113 17.984 17.544C17.604 17.1767 17.395 16.67 17.357 16.024C16.977 16.6827 16.4577 17.1957 15.799 17.563C15.1403 17.9177 14.393 18.095 13.557 18.095C12.6703 18.095 11.866 17.886 11.144 17.468C10.4347 17.0373 9.871 16.4483 9.453 15.701C9.04767 14.9537 8.845 14.1113 8.845 13.174C8.845 12.2367 9.04767 11.4007 9.453 10.666C9.871 9.91867 10.4347 9.336 11.144 8.918C11.866 8.5 12.6703 8.291 13.557 8.291C14.3677 8.291 15.096 8.46833 15.742 8.823C16.4007 9.165 16.9263 9.65267 17.319 10.286V8.367H18.554V15.568C18.554 16.0747 18.6617 16.442 18.877 16.67C19.0923 16.898 19.3773 17.012 19.732 17.012C20.3273 17.012 20.796 16.6573 21.138 15.948C21.4927 15.2387 21.67 14.2507 21.67 12.984C21.67 11.5147 21.3407 10.2227 20.682 9.108C20.0233 7.98067 19.0987 7.10667 17.908 6.486C16.73 5.86533 15.381 5.555 13.861 5.555C12.3283 5.555 10.9667 5.878 9.776 6.524C8.598 7.15733 7.67967 8.05667 7.021 9.222C6.36233 10.3747 6.033 11.692 6.033 13.174C6.033 14.656 6.356 15.9797 7.002 17.145C7.66067 18.3103 8.57267 19.216 9.738 19.862C10.916 20.508 12.265 20.831 13.785 20.831C14.3803 20.831 15.001 20.7613 15.647 20.622C16.3057 20.4827 16.901 20.2737 17.433 19.995L17.756 20.926C17.2113 21.2047 16.578 21.42 15.856 21.572C15.1467 21.724 14.4563 21.8 13.785 21.8C12.0623 21.8 10.536 21.4327 9.206 20.698C7.876 19.9633 6.83733 18.9437 6.09 17.639C5.35533 16.3217 4.988 14.8333 4.988 13.174C4.988 11.502 5.36167 10.02 6.109 8.728C6.85633 7.42333 7.90133 6.41 9.244 5.688C10.5993 4.95333 12.1383 4.586 13.861 4.586ZM13.728 16.993C14.412 16.993 15.0263 16.8347 15.571 16.518C16.1157 16.2013 16.5463 15.758 16.863 15.188C17.1797 14.6053 17.338 13.934 17.338 13.174C17.338 12.4267 17.1797 11.768 16.863 11.198C16.5463 10.6153 16.1157 10.172 15.571 9.868C15.0263 9.55133 14.412 9.393 13.728 9.393C13.0313 9.393 12.4043 9.55133 11.847 9.868C11.3023 10.1847 10.8717 10.628 10.555 11.198C10.251 11.768 10.099 12.4267 10.099 13.174C10.099 13.9213 10.251 14.5863 10.555 15.169C10.8717 15.739 11.3023 16.1887 11.847 16.518C12.4043 16.8347 13.0313 16.993 13.728 16.993Z" fill="#2BA7F3"/>
</svg>
                    <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="button">

                    <button>Log In</button>
                    </div>
                </form>
                </center>
            </div>
        </div>
    );
}
 
export default Login;