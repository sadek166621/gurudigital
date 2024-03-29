@extends('admin.layouts.master')
@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>@isset($onlineclass) Update @else Add New @endisset Online Class</h1>
      </div>

    </div>
  </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
  <div class="container-fluid">
    <div class="row">
      <!-- left column -->
      <div class="col-md-12">
        <!-- general form elements -->
        <div class="card card-primary">
          <!-- /.card-header -->
          <!-- form start -->
          <form action="@isset($onlineclass){{ route('admin.online.update', $onlineclass->id) }}@else{{ route('admin.online.store') }}@endisset"
            method="post" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Class</label>
                <input type="text" name="class" class="form-control" id="exampleInputEmail1" placeholder="Enter Class" @isset($onlineclass) value="{{ $onlineclass->class }}" @endisset required>
              </div>
              
              <div class="row">
                <div class="col-sm-12">
                  <div class="col-sm-4" style="float: left">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Section</label>
                        <input type="text" name="section" class="form-control" id="exampleInputEmail1" placeholder="Enter Section" @isset($onlineclass) value="{{ $onlineclass->section }}" @endisset >
                      </div>
                  </div>
                  <div class="col-sm-8" style="float: left">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Link</label>
                        <input type="text" name="link" class="form-control" id="exampleInputEmail1" placeholder="Enter Link" @isset($onlineclass) value="{{ $onlineclass->link }}" @endisset >
                      </div>
                  </div>
                  
                </div>
              </div>
                <div class="form-check ">
                  <input type="checkbox" name="status" class="form-check-input" id="exampleCheck1" @isset($onlineclass) @if($onlineclass->status == 1) checked @endif @else checked @endisset>
                  <label class="form-check-label" for="exampleCheck1">Active</label>
                </div>
            </div>
            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary float-right">Submit</button>
            </div>
          </form>
        </div>
        <!-- /.card -->
      <!--/.col (right) -->
    </div>
    <!-- /.row -->
  </div><!-- /.container-fluid -->
</section>
<!-- /.content -->
@endsection

@push('js')
<script>
     $(document).ready(function () {
        $('#description').summernote();
     });
</script>
@endpush