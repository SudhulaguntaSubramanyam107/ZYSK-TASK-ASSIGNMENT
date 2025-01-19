import React from "react";

function Body() {
    return (
        <div className="bg-[#ffffff]">
            <section className="text-center py-12 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="inline-flex items-center space-x-2 p-2 rounded-[80px] border border-[#E63F3A] text-[#E63F3A] mb-4">
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#E63F3A]">New feature</div>
                        <span className="flex items-center">
                            Check out the team dashboard
                            <svg className="ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668" stroke="#E63F3A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#101828] leading-tight text-[36px] md:text-[50px]">
                        Beautiful analytics to grow smarter
                    </h1>
                    <p className="text-[#475467] text-lg md:text-xl mt-4 font-normal">
                        Powerful, self-serve product and growth analytics to help you convert, engage,
                        <br />
                        and retain more users. Trusted by over 4,000 startups.
                    </p>
                    <div className="mt-6 flex justify-center items-center space-x-8">
                        <button className="bg-[#ffffff] hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-[108px] flex items-center space-x-1 border border-[#DOD5DD]">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 18.3332C15.1024 18.3332 18.8333 14.6022 18.8333 9.99984C18.8333 5.39746 15.1024 1.6665 10.5 1.6665C5.89762 1.6665 2.16666 5.39746 2.16666 9.99984C2.16666 14.6022 5.89762 18.3332 10.5 18.3332Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.41666 7.47095C8.41666 7.07321 8.41666 6.87434 8.49978 6.76332C8.57221 6.66657 8.68308 6.60603 8.80364 6.59742C8.94198 6.58754 9.10926 6.69508 9.44383 6.91016L13.3777 9.43905C13.668 9.62569 13.8131 9.719 13.8633 9.83766C13.9071 9.94134 13.9071 10.0583 13.8633 10.162C13.8131 10.2807 13.668 10.374 13.3777 10.5606L9.44383 13.0895C9.10926 13.3046 8.94198 13.4121 8.80364 13.4023C8.68308 13.3936 8.57221 13.3331 8.49978 13.2364C8.41666 13.1253 8.41666 12.9265 8.41666 12.5287V7.47095Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Demo</span>
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-[108px]">
                            Sign up
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center mb-12 sm:mb-24">
                <img
                    src="https://s3-alpha-sig.figma.com/img/77d8/9fa1/a69b18701253a32f7e394acfc433d49b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YS-Jtc0-Ve3jaOlOlp-9BpWzlsaMDBADGur869~rLULf71EfaukCJIkRchKg-DjBbHimGJwC3GM-lXYm30LtvL0akS~RqwVXYKhLcTwpqKuZpBNHn4ruGFvsQn-3eTDILJNHJqeu5ZLWTSn1YUSzRuLAKh04dIXPRI16Iss4z8lzFWeSCelmpRBjrIrcnEyuhstpzderuRACZmfRHygbOpj9hN4r9gyUfZ3tNyM8saQGuW8UgF7Yg-XbdeMJWnJ4EaYMyl91Yy3Pb7saIyc5IK1zVcVUljHvUHqOkpwHoUY-LKgk2QQDSm3jKVpYzSuIzCu6-U3qmF~EtGM9nYpS3g__"
                    className="h-[300px] sm:h-[400px] md:h-[560px] w-full sm:w-[90%] lg:w-[1260px] object-cover border-[10px] border-[#101828] rounded-t-[12px]"
                />
            </div>

            <div className="bg-[#ffffff] mb-24">
                <h1 className="text-center mb-8">Join 4000+ companies already growing </h1>
                <div className="flex items-center justify-center space-x-6 text-center">
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84975 34.1503 0 22 0C9.84971 0 0 9.84975 0 22C0 34.1503 9.84971 44 22 44ZM28.8632 10.2485C29.1973 9.06186 28.0457 8.36015 26.994 9.10944L12.3124 19.5685C11.1718 20.3811 11.3512 22 12.5819 22H16.448V21.9701H23.9828L17.8433 24.1363L15.1368 33.7515C14.8027 34.9382 15.9542 35.6399 17.006 34.8906L31.6876 24.4315C32.8282 23.619 32.6487 22 31.4181 22H25.5553L28.8632 10.2485Z"
                                    fill="#155EEF"
                                />
                            </svg>
                        </span>
                        <span className="text-[#101828] font-bold">Boltshift</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg
                                width="39"
                                height="44"
                                viewBox="0 0 39 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.9655 1.44802C19.4605 1.34415 18.9396 1.34415 18.4345 1.44802C17.8507 1.56809 17.3289 1.86035 16.9141 2.0927L16.801 2.15587L2.74154 9.96669C2.70267 9.98829 2.66262 10.0103 2.62158 10.033C2.18245 10.2748 1.6303 10.5789 1.20628 11.0391C0.839687 11.4369 0.562258 11.9084 0.392548 12.422C0.196252 13.0161 0.198549 13.6465 0.200375 14.1478C0.200546 14.1947 0.200713 14.2404 0.200713 14.2849V29.7068C0.200713 29.7513 0.200546 29.797 0.200375 29.8438C0.198549 30.3452 0.196252 30.9755 0.392548 31.5697C0.562259 32.0833 0.839689 32.5548 1.20628 32.9526C1.6303 33.4127 2.18245 33.7168 2.62158 33.9587C2.66262 33.9813 2.70268 34.0034 2.74154 34.025L16.801 41.8358L16.9141 41.899C17.3289 42.1313 17.8507 42.4236 18.4345 42.5436C18.9396 42.6475 19.4605 42.6475 19.9655 42.5436C20.5493 42.4236 21.0711 42.1313 21.4859 41.899L21.599 41.8358L35.6585 34.025C35.6757 34.0154 35.6931 34.0058 35.7107 33.9961C35.733 33.9838 35.7555 33.9713 35.7784 33.9587C36.2176 33.7169 36.7697 33.4127 37.1937 32.9526C37.5603 32.5548 37.8378 32.0833 38.0075 31.5697C38.2038 30.9755 38.2015 30.3452 38.1996 29.8438C38.1995 29.797 38.1993 29.7513 38.1993 29.7068V14.2849C38.1993 14.2404 38.1995 14.1947 38.1996 14.1478C38.2015 13.6465 38.2038 13.0161 38.0075 12.422C37.8378 11.9084 37.5603 11.4369 37.1937 11.0391C36.7697 10.5789 36.2176 10.2748 35.7784 10.0329L35.7769 10.0321C35.7364 10.0098 35.6969 9.98801 35.6585 9.96669L21.599 2.15586L21.4859 2.09269C21.0711 1.86035 20.5493 1.56809 19.9655 1.44802ZM18.6464 5.47754C18.9343 5.31759 19.0813 5.23676 19.1909 5.18388L19.2 5.17953L19.2091 5.18388C19.3187 5.23676 19.4657 5.31758 19.7536 5.47754L32.3871 12.4961L19.2 19.8223L6.01286 12.4962L18.6464 5.47754ZM4.00057 15.7251L17.3 23.1137L17.3001 37.7662L4.58692 30.7033C4.28302 30.5345 4.12786 30.4474 4.019 30.378L4.00981 30.3721L4.00912 30.3612C4.00136 30.2324 4.00057 30.0545 4.00057 29.7068V15.7251Z"
                                    fill="#101828"
                                />
                            </svg>
                        </span>
                        <span className="text-[#101828] font-bold">Lightbox</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7065 9.16308C36.2743 8.73086 35.8421 8.29864 35.4099 7.86642C34.1132 6.48331 32.7301 5.10021 31.0012 4.23577C29.013 3.19844 26.8519 3.45777 24.6908 3.45777C21.406 3.45777 13.1938 3.45777 8.35291 3.45777L11.6378 7.86642C17.6024 7.86642 26.9384 7.86642 31.2606 7.86642C33.0759 7.86642 34.6319 8.21219 36.1014 9.16308C36.3608 9.24952 36.6201 9.24952 36.7065 9.16308Z" fill="#66C61C" />
                                <path d="M40.3372 16.2517C39.9049 15.8195 39.4727 15.3873 39.0405 14.955C37.7438 13.5719 36.3608 12.1888 34.6319 11.3244C32.6437 10.2871 30.4826 10.5464 28.3215 10.5464C25.4688 10.5464 18.6397 10.5464 13.7989 10.5464L17.0837 14.955C22.9619 14.955 31.0012 14.955 34.9776 14.955C36.793 14.955 38.349 15.3008 39.8185 16.2517C39.9914 16.3381 40.1643 16.3381 40.3372 16.2517Z" fill="#4CA30D" />
                                <path d="M44.4 23.167C43.9678 22.7348 43.5356 22.3025 43.1034 21.8703C41.8067 20.4872 40.4236 19.1041 38.6947 18.2397C36.7065 17.2023 34.5454 17.4617 32.3843 17.4617C29.7045 17.4617 23.8264 17.4617 19.0719 17.4617L22.3568 21.8703C28.0621 21.8703 35.3234 21.8703 38.9541 21.8703C40.7694 21.8703 42.3254 22.2161 43.7949 23.167C44.0542 23.2534 44.2271 23.3399 44.4 23.167Z" fill="#3B7C0F" />
                                <path d="M8.00714 34.8368C8.43936 35.269 8.87158 35.7012 9.3038 36.1335C10.6005 37.5166 11.9836 38.8997 13.7124 39.7641C15.7007 40.8014 17.8618 40.5421 20.0229 40.5421H36.3608L33.0759 36.1335C27.1113 36.1335 17.7753 36.1335 13.4531 36.1335C11.6378 36.1335 10.0818 35.7877 8.61225 34.8368C8.35291 34.7504 8.18003 34.7504 8.00714 34.8368Z" fill="#66C61C" />
                                <path d="M4.37646 27.7487C4.80868 28.1809 5.24091 28.6131 5.67313 29.0453C6.96979 30.4284 8.35288 31.8116 10.0818 32.676C12.07 33.7133 14.2311 33.454 16.3922 33.454H30.9148L27.6299 29.0453C21.7517 29.0453 13.7124 29.0453 9.73599 29.0453C7.92067 29.0453 6.36467 28.6996 4.89512 27.7487C4.72223 27.6622 4.54935 27.6622 4.37646 27.7487Z" fill="#4CA30D" />
                                <path d="M0.399994 20.7465C0.832214 21.1787 1.26443 21.6109 1.69665 22.0431C2.99331 23.4262 4.37642 24.8094 6.1053 25.6738C8.09352 26.7111 10.2546 26.4518 12.4157 26.4518H25.7281L22.4432 22.0431C16.7379 22.0431 9.47662 22.0431 5.84597 22.0431C4.03065 22.0431 2.47465 21.6974 1.0051 20.7465C0.745767 20.66 0.572882 20.66 0.399994 20.7465Z" fill="#3B7C0F" />
                            </svg>

                        </span>
                        <span className="font-bold text-[#101828]">FeatherDev</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.6" cy="22.25" r="20.5" stroke="#E63F3A" stroke-width="3" />
                                <path d="M30.7317 30.3817C26.5923 34.5211 21.9028 37.2233 17.7264 38.2972C13.5123 39.3808 10.1157 38.7571 8.10429 36.7456C6.09289 34.7342 5.4691 31.3376 6.55272 27.1235C7.62665 22.9472 10.3289 18.2576 14.4683 14.1182C18.6077 9.97883 23.2972 7.27662 27.4735 6.2027C31.6876 5.11907 35.0843 5.74286 37.0957 7.75427C39.1071 9.76568 39.7309 13.1623 38.6472 17.3764C37.5733 21.5528 34.8711 26.2423 30.7317 30.3817Z" stroke="#E63F3A" stroke-width="3" />
                                <path d="M30.7315 14.1182C34.8709 18.2576 37.5731 22.9471 38.647 27.1235C39.7307 31.3376 39.1069 34.7342 37.0955 36.7456C35.0841 38.757 31.6874 39.3808 27.4733 38.2972C23.297 37.2233 18.6074 34.5211 14.4681 30.3817C10.3287 26.2423 7.62644 21.5528 6.55252 17.3764C5.4689 13.1623 6.09268 9.76567 8.10409 7.75426C10.1155 5.74285 13.5121 5.11906 17.7262 6.20269C21.9026 7.27661 26.5921 9.97882 30.7315 14.1182Z" stroke="#E63F3A" stroke-width="3" />
                            </svg>

                        </span>
                        <span className="font-bold text-[#101828]">Spherule</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2289 0H14.3711L0.799988 13.5711V30.4289L14.3711 44H31.2289L44.8 30.4289V13.5711L31.2289 0ZM16.7036 30.641L8.00965 21.947L16.7036 13.253C19.9903 9.96627 25.3976 9.96627 28.6843 13.253L37.3783 21.947L28.6843 30.641C25.3976 33.9277 20.0964 33.9277 16.7036 30.641Z" fill="#444CE7" />
                            </svg>

                        </span>
                        <span className="font-bold text-[#101828]">GlobalBank</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16437_298)">
                                    <path d="M27.2694 2.12169L23.0486 0.990723L19.4917 14.2654L16.2804 2.28093L12.0595 3.4119L15.5291 16.3602L6.88724 7.71841L3.79738 10.8083L13.2764 20.2874L1.47179 17.1243L0.34082 21.3451L13.2388 24.8011C13.0912 24.1642 13.0131 23.5006 13.0131 22.8187C13.0131 17.992 16.9258 14.0792 21.7525 14.0792C26.5792 14.0792 30.492 17.992 30.492 22.8187C30.492 23.4962 30.4148 24.1557 30.269 24.7889L41.9909 27.9297L43.1218 23.709L30.1725 20.2392L41.9779 17.0759L40.8469 12.8551L27.8981 16.3247L36.54 7.68293L33.4501 4.59307L24.1026 13.9406L27.2694 2.12169Z" fill="#FF4405" />
                                    <path d="M30.2567 24.838C29.8948 26.368 29.1308 27.7424 28.0825 28.8435L36.5745 37.3357L39.6644 34.2458L30.2567 24.838Z" fill="#FF4405" />
                                    <path d="M27.9968 28.9323C26.9359 30.0159 25.5951 30.8245 24.0916 31.2413L27.1817 42.7735L31.4025 41.6425L27.9968 28.9323Z" fill="#FF4405" />
                                    <path d="M23.934 31.2835C23.2364 31.4628 22.5053 31.5581 21.7518 31.5581C20.9446 31.5581 20.1629 31.4486 19.4208 31.2437L16.3279 42.7866L20.5487 43.9175L23.934 31.2835Z" fill="#FF4405" />
                                    <path d="M19.2715 31.2012C17.791 30.7638 16.4741 29.9448 15.4348 28.8581L6.92192 37.3711L10.0118 40.4609L19.2715 31.2012Z" fill="#FF4405" />
                                    <path d="M15.3647 28.7829C14.3432 27.6893 13.5992 26.3333 13.2451 24.827L1.48486 27.9781L2.61582 32.1989L15.3647 28.7829Z" fill="#FF4405" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16437_298">
                                        <rect width="44" height="44" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span className="font-bold text-[#101828]">Nietzsche</span>
                    </div>
                </div>
            </div>
            <div className="text-center bg-[#ffffff] mb-16">
                <div className="mb-3 text-[#E63F3A] font-medium">Features</div>
                <div className="mb-5 text-[#101828] font-medium text-[36px]">Analytics that feels like it's from the future</div>
                <div className="text-[#475467] font-normal mb-16 text-[20px]">Powerful, self-serve product and growth analytics to help you convert , engage<br /> and retain more users.Trusted by over 4,000 startups </div>
            </div>
            <div className="grid grid-cols-3 gap-8 p-8 bg-[#ffffff]">
                <div class="flex flex-col items-center text-center p-4">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_802)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_802" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_802" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_802" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Share team inboxes</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_810)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M27 15L18.0935 25.6879C17.7446 26.1064 17.5702 26.3157 17.5676 26.4925C17.5653 26.6461 17.6337 26.7923 17.7533 26.8889C17.8907 27 18.1632 27 18.708 27H26L25 35L33.9065 24.3121C34.2554 23.8936 34.4298 23.6843 34.4324 23.5075C34.4347 23.3539 34.3663 23.2077 34.2467 23.1111C34.1093 23 33.8368 23 33.292 23H26L27 15Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_810" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_810" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_810" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Deliver instant answers</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 ">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_818)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_818" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_818" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_818" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Manage your team with reports</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        Measure what matters with easy-to-use reports. Filter, export, and drill down on data in a couple of clicks.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_827)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M22.9996 27C22.9996 27 24.3121 28.5 26.4996 28.5C28.6871 28.5 29.9996 27 29.9996 27M29.2496 22H29.2596M23.7496 22H23.7596M26.4996 33C31.194 33 34.9996 29.1944 34.9996 24.5C34.9996 19.8056 31.194 16 26.4996 16C21.8052 16 17.9996 19.8056 17.9996 24.5C17.9996 25.45 18.1555 26.3636 18.443 27.2166C18.5512 27.5376 18.6053 27.6981 18.6151 27.8214C18.6247 27.9432 18.6174 28.0286 18.5873 28.1469C18.5568 28.2668 18.4894 28.3915 18.3547 28.6408L16.7191 31.6684C16.4857 32.1002 16.3691 32.3161 16.3952 32.4828C16.4179 32.6279 16.5034 32.7557 16.6288 32.8322C16.7728 32.9201 17.0169 32.8948 17.5052 32.8444L22.6262 32.315C22.7813 32.299 22.8588 32.291 22.9295 32.2937C22.999 32.2963 23.0481 32.3029 23.1159 32.3185C23.1848 32.3344 23.2714 32.3678 23.4448 32.4345C24.3928 32.7998 25.4228 33 26.4996 33ZM29.7496 22C29.7496 22.2761 29.5258 22.5 29.2496 22.5C28.9735 22.5 28.7496 22.2761 28.7496 22C28.7496 21.7239 28.9735 21.5 29.2496 21.5C29.5258 21.5 29.7496 21.7239 29.7496 22ZM24.2496 22C24.2496 22.2761 24.0258 22.5 23.7496 22.5C23.4735 22.5 23.2496 22.2761 23.2496 22C23.2496 21.7239 23.4735 21.5 23.7496 21.5C24.0258 21.5 24.2496 21.7239 24.2496 22Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_827" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_827" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_827" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Connect with customers</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        Solve a problem or close a sale in real-time with chat. If unavailable, customers are routed to email seamlessly.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_835)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M23 22V19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22H23ZM23 22V28M23 22H29M23 28V31C23 32.6569 21.6569 34 20 34C18.3431 34 17 32.6569 17 31C17 29.3431 18.3431 28 20 28H23ZM23 28H29M29 28H32C33.6569 28 35 29.3431 35 31C35 32.6569 33.6569 34 32 34C30.3431 34 29 32.6569 29 31V28ZM29 28V22M29 22V19C29 17.3431 30.3431 16 32 16C33.6569 16 35 17.3431 35 19C35 20.6569 33.6569 22 32 22H29Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_835" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_835" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_835" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Connect the tools you already use</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        Explore 100+ integrations that make your day-to-day workflow more efficient and familiar.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-5 text-2xl"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_16437_843)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                            <path d="M34.9996 24.5C34.9996 29.1944 31.194 33 26.4996 33C25.4228 33 24.3928 32.7998 23.4448 32.4345C23.2714 32.3678 23.1848 32.3344 23.1159 32.3185C23.0481 32.3029 22.999 32.2963 22.9295 32.2937C22.8588 32.291 22.7813 32.299 22.6262 32.315L17.5052 32.8444C17.0169 32.8948 16.7728 32.9201 16.6288 32.8322C16.5034 32.7557 16.4179 32.6279 16.3952 32.4828C16.3691 32.3161 16.4857 32.1002 16.7191 31.6684L18.3547 28.6408C18.4894 28.3915 18.5568 28.2668 18.5873 28.1469C18.6174 28.0286 18.6247 27.9432 18.6151 27.8214C18.6053 27.6981 18.5512 27.5376 18.443 27.2166C18.1555 26.3636 17.9996 25.45 17.9996 24.5C17.9996 19.8056 21.8052 16 26.4996 16C31.194 16 34.9996 19.8056 34.9996 24.5Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4965 21.9493C25.5968 20.9104 24.0965 20.631 22.9692 21.5822C21.842 22.5335 21.6833 24.124 22.5685 25.2491C23.117 25.9461 24.4935 27.2191 25.4616 28.087C25.8172 28.4057 25.995 28.5651 26.2084 28.6293C26.3914 28.6844 26.6017 28.6844 26.7847 28.6293C26.9981 28.5651 27.1759 28.4057 27.5315 28.087C28.4996 27.2191 29.8761 25.9461 30.4246 25.2491C31.3098 24.124 31.1705 22.5235 30.0238 21.5822C28.8772 20.641 27.3963 20.9104 26.4965 21.9493Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_16437_843" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16437_843" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16437_843" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                    <h3 className="text-[#101828] font-medium mb-2 text-[20px]">Our people make the difference</h3>
                    <p className="text-[#475467] font-normal text-[16px]">
                        We're an extension of your customer service team, offering free resources and friendly support 24/7.
                    </p>
                </div>
            </div>
            <div className="bg-[#F9FAFB] text-center mb-24 p-24">
                <div className="flex justify-center items-center space-x-2 mb-6">
                    <svg
                        width="25"
                        height="40"
                        viewBox="0 0 25 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="0.583374" y="16" width="7.99999" height="7.99999" fill="#079455" />
                        <rect
                            x="24.5833"
                            y="24"
                            width="8"
                            height="7.99999"
                            transform="rotate(180 24.5833 24)"
                            fill="#067647"
                        />
                        <path d="M8.58347 16L16.5835 8V16L8.58347 24V16Z" fill="#ABEFC6" />
                        <path d="M16.5833 24L8.58336 32L8.58336 24L16.5833 16L16.5833 24Z" fill="#75E0A7" />
                        <path d="M0.583374 16L16.5833 0V7.99999L8.58336 16H0.583374Z" fill="#47CD89" />
                        <path d="M24.5833 24L8.58336 40L8.58336 32L16.5834 24L24.5833 24Z" fill="#17B26A" />
                    </svg>
                    <span className="font-medium text-[#101828] text-[20px]">Sisyphus</span>
                </div>
                <div className="font-medium text-[#101828] text-[48px] mb-6">
                    We've been using Untitled to kick start every new <br /> project and can't imagine
                    working without it.
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l25T1-8gLgc8aVXgxELuN~sKermJ8CNS8PLs7gpcgvrp4jnmHty25VALMCy6zaPIID3-Wu0L7YuEKyeMJqcRHEIa67HIfm2QysLxldZJe5iFmo40J6r4N0DAW-dLpsKQSL1vGZ2lDCbnVfd4oDhbAuygFno9Aw0t0YEc4pEHlnycNthrvdcSpGxhkaSlVgOyRqXaARRFgmxgTtTM43dV~LAYrqjFh1PjDN6mCmLCddyRgZi~9z1oDIB5-pKRUS5TjnKnAzAAh0AkrNBBG0PiZe9fPlg7h5pFk9ni8ihntOJDvwTbBjQInAUgZYRZK3YN6QbcgMJNpGjFqUpovUPeww__"
                        className="rounded-[200px] h-[64px] w-[64px]"
                    />
                </div>
                <div className="text-[#101828] font-medium text-[18px]">Candice Wu</div>
                <div className="text-[#475467] text-[16px] font-normal">
                    Product Manager, Sisyphus
                </div>
            </div>

            <div className="bg-[#ffffff] mb-16 text-center">
                <div className="mb-16">
                    <div className="mb-5 text-[36px] font-medium text-[#101828]"> Frequently asked questions </div>
                    <div className="text-[20px] text-[#475467]">Everything you need to know about the product and billing.</div>
                </div>
                <div class="bg-white p-8 rounded-lg max-w-3xl mx-auto">
                    <div class="">
                        <div class="py-4 flex flex-col space-y-2">
                            <div class="flex justify-between items-center">
                                <h3 class="text-[#101828] text-[18px] font-medium">
                                    Is there a free trial available?</h3>
                                <button><svg width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                        stroke="#98A2B3"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                </button>
                            </div>
                            <p class="mt-2 text-[#475467] text-[16px] text-left">
                                Yes, you can try us for free for 30 days. If you want, we'll provide you
                                with a free, personalized 30-minute onboarding call to get you up and
                                running as soon as possible.
                            </p>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                        <div class="py-4 flex justify-between items-center">
                            <h3 class="text-[#101828] text-[18px] font-medium">
                                Can I change my plan later?
                            </h3>
                            <button>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                        <div class="py-4 flex justify-between items-center">
                            <h3 class="text-[#101828] text-[18px] font-medium">
                                What is your cancellation policy?
                            </h3>
                            <button>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                        <div class="py-4 flex justify-between items-center">
                            <h3 class="text-[#101828] text-[18px] font-medium">
                                Can other info be added to an invoice?
                            </h3>
                            <button>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                        <div class="py-4 flex justify-between items-center">
                            <h3 class="text-[#101828] text-[18px] font-medium">
                                How does billing work?
                            </h3>
                            <button>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                        <div class="py-4 flex justify-between items-center">
                            <h3 class="text-[#101828] text-[18px] font-medium">
                                How do I change my account email?
                            </h3>
                            <button>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1"></div>
                    </div>
                </div>

            </div>
            <div className="bg-[#9FAFB] text-center mb-16">
                <div className="flex justify-center items-center space-x-[-12px] relative mb-6">
                    <div className="relative z-10">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-N1~7lF27qVpCKu27pvPmYjtmME9T12rdS1QeUMxXI8ZtjuQqNQheo7kLGPC5BudyH9AnWLSs1tDRoQ9vCyF7jkKF2i19-mvHtJWyZTo0ScEKv~QSkUeom4y1UfU03No0G9hSnjWhv38zlJLGJAz52yehSs6RYsCOndRDwgq4A9HjwA0bdhUTUTIswKRR9JZGV7WnHWOnlfEDrLwu6dSKFBAQnWEMXeB7FyPUBgb29gTFLMC5tbPTQjaZnYv-6VQHJVbgOvBAAwR7Xxhzis6OG1EH1BODRtMUo6wMuBCoEekgkk2ALD7JfkMMzyGBvCuOX19UI8w6eyDkRxtuJIJw__"
                            className="w-[48px] h-[48px] rounded-[200px] shadow-md"
                        />
                    </div>
                    <div className="relative z-20">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZ74fgZ7-dGwe02JOrkhGBqs2dO3zHvcTHBtRVPxckBRAXWB5ZcZRPh6W86iACffw8KYerXKerfSsaMalWjrfK1jDlf1IVdGBOMwBrf1E6vKaHtsS63CMO~QfG91RRkp8ZiA6Dt87lq2o20nfedAUXrT6aE2izBRfeDSgW0OkUIhauTxfQQ71dJbRYXq4xW9JtfMYcuMLhtP6YQzsa80POZY4ligCzHmpsfVH8F2jmjSn61DeQDshmoHU4~UoIuZfgMNLP9P9N1VlzfIKdeOkTl2GvZJ7XwNCxuBOEa2yqkcsXL4cwU9N~L9Bjit9HE7MTJF~laaXDyHV--CBD8u4w__"
                            className="w-[56px] h-[56px] rounded-[200px] shadow-lg border-2 border-white"
                        />
                    </div>
                    <div className="relative z-10">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuHmksNk1v8AcPSaIBrVEGCVr82EcR-l8UhHRR3RN5jFqira-48Bim~9xQrGuHQiYU4OF1~hAdP1huuCN9fe3jjH4261r~wKGyGDlYmkTB8vra5H~BgZTh6aD8xrS9YPncrLVmNn3Y~oxBomnWEYMJYCitm~Or2J7QjrZBdrf28Gm~tb5yshxCHjffyfpVYDPCwpvYuuxiG1s9aKspCDSe8YCS0A23~dp-omD-MSLjUsTjRO9MIHq055kY0MIlTXKpVbPB35LN~OuC9-MYwYhX3HeKoQJSHPcNy5Y7Ltd6sFsH~kMRUK3TdTg~v6QmpadA57evrKjibbLkX9kE7I1A__"
                            className="w-[48px] h-[48px] rounded-[200px] shadow-md"
                        />
                    </div>
                </div>
                <div className="font-medium text-[#101828] text-[20px]">Still have questions?</div>
                <div className="font-normal text-[#475467] text-[18px] mb-8">Can't find the answer you're looking for? Please chat with our friendly team.</div>
                <button className="bg-[#E63F3A] text-white px-6 py-2 rounded-[6px] font-medium hover:bg-[#c9302e]">Get in touch</button>
            </div>

            <div class="bg-white py-12 px-6 mb-24">
                <div class="max-w-7xl mx-auto">
                    <div class="mb-8">
                        <div class="flex justify-between items-center">
                            <h2 class="text-[#E63F3A] text-[16px] font-medium">Our blog</h2>
                            <a href="#" class="inline-block bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
                                View all posts
                            </a>
                        </div>
                        <div class="mt-2">
                            <h1 class="text-3xl font-bold text-[#101828] text-[36px]">Latest blog posts</h1>
                            <p class="text-lg text-[#475467] text-[20px] mt-1 ">
                                Tools and strategies modern teams need to help their companies grow.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cY-afauHT8gBUz23YzZLpdOuyq10bjBYYAv-VM59MS70NdF-Wua9lWNlZjNL8h2VLKc5DEkt5F-ZfHRgFBsyTo-qvAu~CjfgtagCUjKpQl-S~EkSkKmj9bXzMKNO05v27fDeV7Ws01gozHD4zy-hRmJ9V-Ho7ISzHdBxJ36b8bj2Yyx8TqbyIrdOeFLsoCAVdlMRDSYn1FuNhafj~vHTh~l7RXRb4IA3U9pcZJ~4YoE2L1AfDzxcNLFcTuogCK-G48f0-~dQ~aAf1Av19KIndye6bmfDKl6JQEW9O~G4LixPhAi5qcMpg1RHHkk9q3lkylsEoVQbEVKWxjFGWAeNbQ__" alt="UX review presentations" class="w-[384px] h-[240px] object-cover" />
                            <div class="p-6">
                                <p class="text-sm font-medium text-[#E63F3A] text-[14px]">Design</p>
                                <h3 class="text-xl font-medium text-[#101828] mt-2 flex items-center text-[24px]">
                                    UX review presentations
                                    <span class="ml-9">
                                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <p class="text-[16px] text-[#475467] mt-2 font-normal">
                                    How do you create compelling presentations that wow your colleagues and impress your managers?
                                </p>
                                <div class="flex items-center mt-4">
                                    <img src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZ74fgZ7-dGwe02JOrkhGBqs2dO3zHvcTHBtRVPxckBRAXWB5ZcZRPh6W86iACffw8KYerXKerfSsaMalWjrfK1jDlf1IVdGBOMwBrf1E6vKaHtsS63CMO~QfG91RRkp8ZiA6Dt87lq2o20nfedAUXrT6aE2izBRfeDSgW0OkUIhauTxfQQ71dJbRYXq4xW9JtfMYcuMLhtP6YQzsa80POZY4ligCzHmpsfVH8F2jmjSn61DeQDshmoHU4~UoIuZfgMNLP9P9N1VlzfIKdeOkTl2GvZJ7XwNCxuBOEa2yqkcsXL4cwU9N~L9Bjit9HE7MTJF~laaXDyHV--CBD8u4w__" alt="Author Avatar" class="w-[40px] h-[40px] rounded-[200px]" />
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-[#101828] text-[14px] font-medium">Olivia Rhye</p>
                                        <p class="text-sm text-[#475467] text-[14px] font-normal">20 Jan 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MW7O~X-iOlMEZZchzxuVn8bvkWGYawHbzF7HeHCOweoYF3MXRiSnP6D0q2PLrIkYOyU~~VxNXfSqq~s2Pk3NhWAnriIWJog3ty-hiTv02AcyP8fIKlavMjb9iunz8H-7JhFhuMCLjxZpYjQuvbQZUhWB6rRqxXKDDOoHq6tkBeepl1v5cWT1krR8OXnqLcAcbHlhpSYIlBvZprQr0A7FnS1DXlFvUesvYXRJRKtH5Cauu6zbJbXCrLNi3haTPBlzhayKU531pUHJkfGMAgyERNyEzmNzFTwXVD9uO6bgQQ4tUlDLa4zD~MQLGr1~Pgy4ncM6YRi0zZCZKtU-UQJskA__" alt="Migrating to Linear 101" class="w-[384px] h-[240px] object-cover" />
                            <div class="p-6">
                                <p class="text-sm font-medium text-[#E63F3A] text-[14px]">Product</p>
                                <h3 class="text-xl font-semibold text-gray-900 mt-2 flex items-center">
                                    Migrating to Linear 101
                                    <span class="ml-9">
                                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <p class="text-[16px] text-[#475467] mt-2 font-normal">
                                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
                                </p>
                                <div class="flex items-center mt-4">
                                    <img src="https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCZCFi8kE91V3~8ZExu-L5BRpY50mq~voPyGlkt2lnYjZWMChB0h4c~8MkCrG-zZjXkSa2Yl9TQfGSL4ryf-vj6lfNBYbPCtwTULXw2TGXFsPmFeSxO5tZDT5k00DhfhvZ5hEJOByALR~R1XReDvCZuETmmQh1TCOyF5Kvwo~-PlTYgWVEFJmgWjtv-h8yc5p3CCGzYnEsu8A-duZb42dzN2fW-kRXAkRldPF2c98-QlzPpBg8N~lGrjbr-O47xAeiaBLRveGO-A6d6bzrf5p6AVUTM1XMUe3hfKDaWUc9XVny1xyaMEUo19pIzx6~wW2zETwwu4cebr3~ukg2B6OQ__" alt="Author Avatar" class="w-[40px] h-[40px] rounded-[200px]" />
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-[#101828] text-[14px] font-medium">Phoenix Baker</p>
                                        <p class="text-sm text-[#475467] text-[14px] font-normal">19 Jan 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white shadow rounded-lg overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ii9iXqMR1o1BGn9I22mgQmKa2iMc6Kxt3iFju-CM~F0DvSxRPtya7YEvZWzS6JjeE-xbqpUVL5StRV0bwM3Nj-NUTrXfw7-G6Ky8xffCdETGGZbqBCh8WiHAjbVYhRKB6EYD3YcKn1ytcTqkQk758jjG4G8OpBtEp1SVGOzwhDZ4knnGtqRXFF~QUk97y81kkembJUOIDhbkJ329aMxiF~oWRzWQKZ-GHb2Zp68pMndmQ-eZwjf4sVyUFfb0xUdyfZ0ax5HuHfmO7mpu57bIjpMZli3uxoBVmfXcHPBg9gAK1wtQUzE-unQUyU3DoUpjJ9SwejglYkhTcIIySW7-IA__" alt="Building your API stack" class="w-[384px] h-[240px] object-cover" />
                            <div class="p-6">
                                <p class="text-sm font-medium text-[#E63F3A] text-[14px]">Software Engineering</p>
                                <h3 class="text-xl font-semibold text-gray-900 mt-2 flex items-center">
                                    Building your API stack
                                    <span class="ml-9">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <p class="text-[16px] text-[#475467] mt-2 font-normal">
                                    The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                                </p>
                                <div class="flex items-center mt-4">
                                    <img src="https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9nMKPtjDF~D3uJzPY4v1BF2MwsMMgYA27of5pDDe58eRMpRKyYMGRbeKQtP3oN~rEWa3PHPBeOKt1Mr6Md6qhHaombNhSc8irMO3PXduWv-ziuk8s--yKAPrZwj~9kTnXIdX0l6zRV517CBvSW0Pmz0aPn4CMNuK3pQh3YGuGavojMh2z9uf3nEwmM31ENy9UyhS9iNJXUPzsGtsSQ-SN0zLubQw0ILktSpKIFi50aFvu0-O461FGOgoozIG9JNYlCifuHFPxo2ZMraRcthtNWNVCbLKlP2V4l41YkdhKGeS5HR-gwj-CwamSNC5A0~wk0qKdynAadqbn1R1Ck0-w__" alt="Author Avatar" class="w-[40px] h-[40px] rounded-[200px]" />
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-[#101828] text-[14px] font-medium">Lana Steiner</p>
                                        <p class="text-sm text-[#475467] text-[14px] font-normal">18 Jan 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 text-center flex flex-col items-center gap-4 bg-[#F9FAFB] p-24">
                <div>Start your free trial</div>
                <div>Join over 4,000+ startups already growing with untitled</div>
                <div className="flex gap-4 mt-4">
                    <button className="bg-[#ffffff] text-[#344054] border border-[#101828] rounded-[8px] px-4 py-2">  Learn more </button>
                    <button className="bg-[#E63F3A] text-[#ffffff] rounded-[8px] px-4 py-2"> Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Body