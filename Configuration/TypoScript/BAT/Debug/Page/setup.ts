page = PAGE
page {
  99999 = TEXT
  99999 {
    data = levelfield:-2,backend_layout_next_level,slide
    override {
      field = backend_layout
    }
    split {
      token = base_batberlin__
      1 {
        current = 1
        wrap = |
      }
    }
    wrap = {$base_batberlin.fluid.path.templates}|.html
  }
}