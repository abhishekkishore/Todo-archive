class AddProject < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
    end
    change_table :tasks do |t|
      t.integer :project_id
      add_foreign_key :tasks, :projects
    end
  end
end
