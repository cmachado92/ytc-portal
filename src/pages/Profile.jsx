import React from "react";

const Login = () => {
  return (
    <div id="wrapper">
      <div id="wrapper">
       
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                {/* <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                        </form>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1"></li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="d-none d-lg-inline me-2 text-gray-600 small">John Doe</span><img class="border rounded-circle img-profile" src="assets/img/clipboard-image-1.png"></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" href="#"><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a class="dropdown-item" href="#"><i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <div class="container-fluid">
                    <h3 class="text-dark mb-4">Profile</h3>
                    <div class="row mb-3">
                        <div class="col-lg-4">
                            <div class="card mb-3">
                                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" src="assets/img/clipboard-image-1.png" width="160" height="160">
                                    <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                </div>
                            </div>
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="text-primary fw-bold m-0">Lineage</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small fw-bold">Canada<span class="float-end">6%</span></h4>
                                    <div class="progress progress-sm mb-3">
                                        <div class="progress-bar bg-danger" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100" style="width: 6%;"><span class="visually-hidden">6%</span></div>
                                    </div>
                                    <h4 class="small fw-bold">Yellow Head<span class="float-end">64%</span></h4>
                                    <div class="progress progress-sm mb-3">
                                        <div class="progress-bar bg-warning" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" style="width: 64%;"><span class="visually-hidden">64%</span></div>
                                    </div>
                                    <h4 class="small fw-bold">USA<span class="float-end">3%</span></h4>
                                    <div class="progress progress-sm mb-3">
                                        <div class="progress-bar bg-primary" aria-valuenow="3" aria-valuemin="0" aria-valuemax="100" style="width: 3%;"><span class="visually-hidden">3%</span></div>
                                    </div>
                                    <h4 class="small fw-bold">Africa<span class="float-end">17%</span></h4>
                                    <div class="progress progress-sm mb-3">
                                        <div class="progress-bar bg-info" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100" style="width: 17%;"><span class="visually-hidden">17%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="shadow card"><a class="btn btn-link text-start card-header fw-bold" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-4" href="#collapse-4" role="button">Personal Annotations</a>
                                <div class="collapse show" id="collapse-4">
                                    <div class="card-body">
                                        <p class="m-0"><br><span style="color: rgb(0, 0, 0);">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</span><br><br></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row mb-3 d-none">
                                <div class="col">
                                    <div class="card text-white bg-primary shadow">
                                        <div class="card-body">
                                            <div class="row mb-2">
                                                <div class="col">
                                                    <p class="m-0">Peformance</p>
                                                    <p class="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card text-white bg-success shadow">
                                        <div class="card-body">
                                            <div class="row mb-2">
                                                <div class="col">
                                                    <p class="m-0">Peformance</p>
                                                    <p class="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow mb-3">
                                        <div class="card-header py-3">
                                            <p class="text-primary m-0 fw-bold">Who I am</p>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div><label class="form-label" for="username"><strong>Full Name</strong></label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="first_name" placeholder="First" name="first_name"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="middle_name" placeholder="Middle" name="last_name"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="last_name-1" placeholder="Last" name="last_name"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div><label class="form-label" for="username"><strong>Traditional Name</strong></label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="tfirst_name" placeholder="First" name="tfirst_name"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="tmiddle_name" placeholder="Middle" name="tmiddle_name"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><input class="form-control" type="text" id="tlast_name" placeholder="Last" name="tlast_name"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Maiden Name</strong></label><input class="form-control" type="text" id="maiden_name" placeholder="Maiden" name="maiden_name"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Goes By</strong></label><input class="form-control" type="text" id="goesby_name" placeholder="Goes By" name="goesby_name"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Birthplace</strong></label><input class="form-control" type="text" id="birthplace" placeholder="" name="birthplace"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Birthdate</strong></label><input class="form-control" id="birthdate" placeholder="" name="birthdate"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Age</strong></label><input class="form-control" type="number" id="age" placeholder="" name="age"></input></div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Primary Language</strong></label><input class="form-control" type="text" id="planguage" placeholder="" name="planguage"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Marital Status</strong></label><input class="form-control" type="text" id="marital_status" placeholder="" name="marital_status"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" id="generation" name="generation"><strong>Generation</strong></label><input class="form-control" type="text" id="birth_place-8" placeholder="" name="birth_place"></input></div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" for="username"><strong>Cultural Origin</strong></label><input class="form-control" type="text" id="cultural_orig" placeholder="" name="cultural_orig"></input></div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="mb-3"><label class="form-label" id="cultural_role" name="cultural_role"><strong>Cultural Role</strong></label><input class="form-control" type="text" id="birth_place-4" placeholder="" name="birth_place"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3"></div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="card shadow">
                                        <div class="card-header py-3">
                                            <p class="text-primary m-0 fw-bold">About me</p>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div class="mb-3"><label class="form-label" for="address"><strong>Address</strong></label><input class="form-control" type="text" id="address" placeholder="Sunset Blvd, 38" name="address"></input></div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="city"><strong>City</strong></label><input class="form-control" type="text" id="city" placeholder="Los Angeles" name="city"></input></div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3"><label class="form-label" for="country"><strong>Country</strong></label><input class="form-control" type="text" id="country" placeholder="USA" name="country"></input></div>
                                                    </div>
                                                </div>
                                                <div class="mb-3"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-5">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Membership Details</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-xxl-3">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Oficial Band</strong></label><input class="form-control" type="text" id="oficial_band" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Member ID</strong></label><input class="form-control" type="text" id="oficial_band-1" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Member Status</strong></label><input class="form-control" type="text" id="oficial_band-2" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-1 offset-xxl-0">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Voter</strong></label>
                                                <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label"></label></input></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-xxl-2">
                                    <div class="mb-3"><label class="form-label" for="city"><strong>Social Assistance</strong></label>
                                        <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="formCheck-3"><label class="form-check-label" for="formCheck-3"></label></input></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Treaty Number</strong></label><input class="form-control" type="text" id="oficial_band-15" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xxl-3">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>SSN</strong></label><input class="form-control" type="text" id="oficial_band-5" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>Receive PCD</strong>&nbsp;By</label><input class="form-control" type="text" id="oficial_band-6" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>PCD</strong>&nbsp;Custom Group</label><input class="form-control" type="text" id="oficial_band-7" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 col-xxl-2">
                                    <form>
                                        <div class="mb-3">
                                            <div class="mb-3"><label class="form-label" for="city"><strong>PCD Register Date</strong></label><input class="form-control" type="text" id="oficial_band-9" placeholder="" name="city"></input></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>Copyright © YTC 2023</span></div>
                </div>
            </footer>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>
    </div>
  );
};

export default Login;
